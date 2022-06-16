pipeline{
    agent any
        stages {
            stages('build'){
                steps{
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
    
}
