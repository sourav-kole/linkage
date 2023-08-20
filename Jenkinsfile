node {
    stage('Checkout ropository') {
        git branch: 'master', url: 'https://github.com/sourav-kole/linkage.git'
    }

    stage('Install node modules') {
        bat "npm install"
    }

    stage('Install firebase') {
        bat "npm i -g firebase-tools -f"
    }

    stage('Build') {
        bat "npm run build"
    }

    stage('Deploy') {
        bat("firebase login")
        bat("firebase deploy --only hosting")
    }
}