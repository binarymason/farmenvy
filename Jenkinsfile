node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Test'){


         print "Environment will be : ${env.NODE_ENV}"

         sh 'echo working!'

       }
    }
    catch (err) {

        currentBuild.result = "FAILURE"

        sh 'echo "something happened"'
        throw err
    }

}
