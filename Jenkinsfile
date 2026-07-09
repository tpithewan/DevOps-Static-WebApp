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

    stage('Test files') {
      steps {
        bat '''
          @echo off
          setlocal enabledelayedexpansion

          if not exist index.html (
            echo Missing index.html
            exit /b 1
          )
          if not exist styles.css (
            echo Missing styles.css
            exit /b 1
          )
          if not exist script.js (
            echo Missing script.js
            exit /b 1
          )

          for %%F in (index.html styles.css script.js) do (
            if %%~zF==0 (
              echo %%F is empty
              exit /b 1
            )
          )

          findstr /C:"styles.css" index.html >nul
          if errorlevel 1 (
            echo index.html does not reference styles.css
            exit /b 1
          )

          findstr /C:"script.js" index.html >nul
          if errorlevel 1 (
            echo index.html does not reference script.js
            exit /b 1
          )

          echo All static site files passed basic tests.
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