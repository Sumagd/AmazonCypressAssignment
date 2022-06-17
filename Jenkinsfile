pipeline{
    agent any
        stages {
            stage('build'){
                steps{
                     sh 'npm install'
                    sh 'npm install cypress'
                    sh 'npm run cypress:run'
                }
            }
        }
    
}



