import React, { Component } from 'react';
import firebase from 'firebase';

class LoginWithFacebook extends Component {

    constructor(props){
        super(props);

        state = {
            email: '',
            password: '',
            error: null
        };
    
        let provider = new firebase.auth.FacebookAuthProvider();
    }

    componentDidMount(){
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
          });          
    }

    render() {
        const { email, password, error } = this.state;
        return (
            <div className="container">
                <div className="row center-align">
                    {error ? <p>{error.message}</p> : null}
                </div>
            </div>
        )
    }
}

export default LoginWithFacebook;