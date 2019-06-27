pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:10-alpine'
    }

  }
  stages {
    stage('Building app') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Deliver') {
      steps {
        sh 'npm run start'
      }
    }
  }
  environment {
    CI = 'true'
  }
}