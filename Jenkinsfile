pipeline{
    agent any
        stages {
            stage('build'){
                steps{
                    sh 'npm install'
                    sh 'npm install cypress --save-dev'
                    sh 'npm test'
                }
            }
        }
    
}
