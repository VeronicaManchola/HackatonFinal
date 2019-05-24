import React, { Component } from 'react';
import firebase from 'firebase';

class LoginWithFacebook extends Component {

    handleClick() {

        let provider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then(() => {
                this.props.history.push('/Home');
            })
            .catch((error) => {
                console.log(error.code)
            });
    }

    render() {
        return <h4 className="waves-effect small waves-light btn fbBtn" onClick={this.handleClick}>Iniciar con Facebook</h4>
    }
}

export default LoginWithFacebook;