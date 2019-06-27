pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
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
        sh 'npm start'
      }
    }
  }
  environment {
    CI = 'true'
  }
}