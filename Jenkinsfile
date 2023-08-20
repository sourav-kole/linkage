node {
    stage('Checkout ropository') {
        git branch: 'master', url: 'https://github.com/sourav-kole/linkage.git'
    }

    stage('Install node modules') {
        bat "npm install"
    }

    stage('Build') {
        bat "npm run build"
    }

    stage('Deploy') {
        bat("firebase deploy --only hosting")
    }
}