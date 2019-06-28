pipeline {
  agent any
  stages {
    stage('Build image') {
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