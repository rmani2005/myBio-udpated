pipeline {
agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '35'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('manikandanravi9')
    HOME = '.'
  } 
  stages {
  	stage('Docker image download for NPM Install') 
    {
           agent { docker 'node:14.17.3' }
            steps {
                  sh 'node -v'
                //sh 'npm install'
            }

    }
    
    stage('Build the docker images') 
    {
      steps {
	sh 'echo "XXXXXXXXXXXXBuilding block started XXXXXXXXXXXXXXXXXXXXXXXXx"'
        sh 'docker build -t manikandanravi9/mybiositenextjs:latest .'
        sh 'echo "XXXXXXXXXXXXBuilding block Completed XXXXXXXXXXXXXXXXXXXXXXXXx"'
      }
    }
    stage('Login to DockerHub') {
      steps {
       sh 'echo "XXXXXXXXXXXXDocker hub loginstarted XXXXXXXXXXXXXXXXXXXXXXXXx"'
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push the built docker image') {
      steps {
        sh 'echo "XXXXXXXXXXXXPushing the Docker hub image block started XXXXXXXXXXXXXXXXXXXXXXXXx"'
        sh 'docker push manikandanravi9/mybiositenextjs:latest'
      }
    }
    stage('Run in local host of the local machine or Ec2 instance ') {
      steps {
        sh 'echo "XXXXXXXXXXXXPushing the Docker hub image block started XXXXXXXXXXXXXXXXXXXXXXXXx"'
        //sh 'docker run -d -p 3000:3000 manikandanravi9/mybiositenextjs:latest'
      }
        post 
            {
                success 
                {
                  echo "XXXXX Deployment Job Completed by hosting the bioSite to production XXXXXXX"
                  build job:"myBioSite-KarateAPI-Test", wait:true
                }
            }

  }
}
}		 
		 
