pipeline {
  agent any

  triggers {
    githubPush()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Validate files') {
      steps {
        bat '''
          if not exist index.html exit /b 1
          if not exist styles.css exit /b 1
          if not exist script.js exit /b 1
        '''
      }
    }

    stage('Deploy') {
      steps {
        bat '''
          if not exist "C:\\Users\\lenovo\\Downloads\\MyDevelopmentWork\\jenkins-deploy\\site" mkdir "C:\\Users\\lenovo\\Downloads\\MyDevelopmentWork\\jenkins-deploy\\site"
          copy /Y index.html "C:\\Users\\lenovo\\Downloads\\MyDevelopmentWork\\jenkins-deploy\\site\\index.html"
          copy /Y styles.css "C:\\Users\\lenovo\\Downloads\\MyDevelopmentWork\\jenkins-deploy\\site\\styles.css"
          copy /Y script.js "C:\\Users\\lenovo\\Downloads\\MyDevelopmentWork\\jenkins-deploy\\site\\script.js"
        '''
      }
    }
  }
}