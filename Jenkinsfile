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
        sh 'echo "Compilada la imagen"'
      }
    }
    stage('Deliver') {
      steps {
        sh 'ls /usr/local/bin'
        sh '/usr/local/bin/docker-compose up -d'
      }
    }
  }
}