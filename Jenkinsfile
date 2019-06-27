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
        sh 'ls -l'
        sh 'sudo rm -rf ./*'
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
    MONGO_URL = 'mongodb+srv://luis:developer@notemaster-develop-s1ccj.mongodb.net/test?retryWrites=true'
    MONGO_DATABASE = 'health-exercise'
  }
}