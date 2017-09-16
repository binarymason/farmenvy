node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout') {
          checkout scm
       }

       stage('Test') {
         print "Environment will be : ${env.NODE_ENV}"
         sh 'echo working!'
       }

       stage('Deploy frontend') {
         steps {
           sh 'echo "deploying frontend to S3..."'

           sh '''
           cd client
           yarn run build
           aws s3 sync build s3://qa-envy
           '''
         }
       }

       stage('Deploy backend') {
         steps {
             sh 'echo "Publishing docker containers"'
             sh "\$(aws ecr get-login)"

             sh 'docker tag test-svc:latest aws_account_id.dkr.ecr.us-east-1.amazonaws.com/state-svc:latest'
             sh 'docker push aws_account_id.dkr.ecr.us-east-1.amazonaws.com/test-svc:latest'
         }
       }
    }
    catch (err) {
        currentBuild.result = "FAILURE"
        sh 'echo "something happened"'
        throw err
    }

}
