import firebase from 'firebase';

function LoginWithFacebook(){
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase
        .auth()
        .signInWithRedirect(provider)
        .then(function (result) {
            console.log(result.user + "logged in")
            this.props.history.push('/Home');
        })
        .catch(function (error) {
            console.log(error.code)
        });
}

export default LoginWithFacebook;