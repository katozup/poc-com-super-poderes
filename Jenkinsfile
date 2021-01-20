node {
  def repos = ['itau-mgm-promoter-credicard']
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
    repos.each{ repo -> 
      echo "Repo ${repo}"
      echo "Ambiente ${envName}"
      // echo "DockerSwarmStack ${dockerSwarm}"
      echo "Job ${jobName}"
      echo "Dockerfile Location ./dockerfile.${repo}"
      buildWithDockerfileITAU {
        dockerRepositoryName =  repo
        dockerFileLocation = " -f ./dockerfile.${repo}/"
        composeProjectName = repo
        envProfile = envName
        repoName = repo
      }
    
      if (branchName == 'development' || branchName == 'qa' || branchName == 'hml') {
        deployDockerServiceK8s {
          microservice = repo
          dockerk8sGroup = "itau"
        }
      } else {
        deployDockerServiceK8s {
          microservice = dockerSwarm
          dockerk8sGroup = "cartoes"
        }
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
