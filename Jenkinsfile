pipeline {
  agent none
  stages {
    stage('Build image') {
      agent {
        dockerfile {
          filename './DockerFile'
        }

      }
      steps {
        sh 'docker build -t health_api .'
      }
    }
    stage('Deliver') {
      steps {
        sh 'docker-compose up -d'
      }
    }
  }
}