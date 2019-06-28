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
        sh 'ls'
      }
    }
    stage('Deliver') {
      steps {
        step([$class: 'DockerComposeBuilder', dockerComposeFile: 'docker-compose.yml', option: [$class: 'StartService', scale: 1, service: 'zookeeper'], useCustomDockerComposeFile: true])
      }
    }
  }
}