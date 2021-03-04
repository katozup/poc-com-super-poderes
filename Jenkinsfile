node {
  def repos = ['itau-mgm-promoter-credicard']
  def jobName = "${env.JOB_NAME}"
  def projectName = jobName.split('-').first()
  def branchName = jobName.split('/').last().split('-').first()
  def envName = 'localhost'
  def dockerSwarm = 'itau-mgm-mono-promoter'
  def nxDefaultBuildPath = '/app/dist/apps/'
  def arg = '--build-arg'

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
      def argRepoName = "--build-arg repoName=$repo"
      def argRepoPath = "--build-arg repoPath=$nxDefaultBuildPath$repo"
      echo "Repo ${repo}"
      echo "Ambiente ${envName}"
      echo "Job ${jobName}"

      if (branchName == 'development') {
          echo "Branch name ${branchName}"
          buildWithDockerfileAWS {
              dockerRepositoryName =  repo
              dockerFileLocation = ". ${argRepoName} ${argRepoPath}"
              composeProjectName = repo
              envProfile = envName
              dockerRegistryGroup = "CARTOES"
          }

          deployDockerServiceK8s {
              microservice = repo
              dockerk8sGroup = 'cartoes'
          }
      } else {
          echo "Entrou no else ${branchName}"
          buildWithDockerfileITAU {
              dockerRepositoryName =  repo
              dockerFileLocation = ". ${argRepoName} ${argRepoPath}"
              composeProjectName = repo
              envProfile = envName
          }

          if (branchName == 'qa' || branchName == 'hml') {
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
