import React, { Component } from 'react';
import firebase from 'firebase';

class LoginWithGoogle extends Component {

    handleClick() {

        let provider = new firebase.auth.GoogleAuthProvider();

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
        return <h4 className="waves-effect small waves-light btn gglBtn" onClick={this.handleClick}>Iniciar con Google</h4>
    }
}

export default LoginWithGoogle;