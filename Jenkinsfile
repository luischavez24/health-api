pipeline {
  agent any
  stages {
    stage('Build image') {
      agent {
        dockerfile {
          filename './DockerFile'
        }

      }
      steps {
        sh 'ls'
      }
    }
    stage('Deliver') {
      agent {
        node {
          label 'my-node'
        }

      }
      steps {
        sh 'docker-compose up -d'
      }
    }
  }
}