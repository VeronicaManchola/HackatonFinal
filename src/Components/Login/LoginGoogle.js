import firebase from 'firebase';

function LoginWithGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();

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

export default LoginWithGoogle;