// node {
//   withEnv(["HOME=${workspace}"]) {
//     docker.image('node:latest').inside('--tmpfs /.config') {
//       stage("Prepare") {
//         checkout scm
//         sh 'yarn install'
//       }

//       stage("Test") {
//         sh 'yarn nx affected --target=test --base=origin/master'
//       }

//       stage("Lint") {
//         sh 'yarn nx affected --target=lint --base=origin/master'
//       }

//       stage("Build") {
//         sh 'yarn nx affected --target=build --base=origin/master --prod'
//       }
//     }
//   }
// }

node {
  def jobName = "${env.JOB_NAME}"
  def projectName = jobName.split('-').first()
  def branchName = jobName.split('/').last().split('-').first()
  def envName = 'localhost'
  def dockerSwarm = 'itau-mgm-mono-promoter'

  if (branchName == 'development') {
    envName = 'dev'
  }

  if (branchName == 'qa') {
    envName = 'qa'
  }

  if (branchName == 'hml') {
    envName = 'hml'
  }

  if (branchName.contains('release') || branchName == 'master') {
    envName = 'prod'
  }

  try {
    echo "Ambiente ${envName}"
    echo "DockerSwarmStack ${dockerSwarm}"
    echo "Job ${jobName}"
    buildWithDockerfileITAU {
      dockerRepositoryName = dockerSwarm
      dockerFileLocation = "."
      composeProjectName = dockerSwarm
      envProfile = envName
    }

    echo "DockerSwarmStack ${dockerSwarm}"
    echo "Teste build jenkinsfile ${dockerSwarm}"

    if (branchName == 'development' || branchName == 'qa' || branchName == 'hml') {
      deployDockerServiceK8s {
        microservice = dockerSwarm
        dockerk8sGroup = "itau"
      }
    } else {
      deployDockerServiceK8s {
        microservice = dockerSwarm
        dockerk8sGroup = "cartoes"
      }
    }
    // stage('SonarQube analysis') {
    //   def workspace = pwd()
    //   nodejs(nodeJSInstallationName: 'NodeJSAuto', configId: '') {
    //     script {
    //       def scannerHome = tool 'Sonar Zup';
    //       withSonarQubeEnv('Sonar Zup') {
    //         sh "${scannerHome}/bin/sonar-scanner"
    //       }
    //     }
    //   }
    // }
  } catch (e) {
    notifyBuildStatus {
      buildStatus = "ABORTED"
    }
    throw e
  }
}
