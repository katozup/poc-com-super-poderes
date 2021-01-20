node {
  def repos = ['itau-mgm-promoter-credicard', 'itau-mgm-promoter-itaucard']
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
    envName = 'production'
  }

  try {
    repos.each{ repo -> 
      echo "Repo ${repo}"
      echo "Ambiente ${envName}"
      echo "Job ${jobName}"

      buildWithDockerfileITAU {
        dockerRepositoryName =  repo
        dockerFileLocation = "--file Dockerfile.${repo} ."
        composeProjectName = repo
        envProfile = envName
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
