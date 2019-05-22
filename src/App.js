import React, { Component } from 'react';
import firebase from './Firebase.js'
import M from "materialize-css";
import './App.css';
import LoginWithEmail from './Components/Login/LoginEmail.js';
import LoginWithFacebook from './Components/Login/LoginFacebook.js';
import LoginWithGoogle from './Components/Login/LoginGoogle.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {

    M.AutoInit();

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("logged in!")
        this.props.history.push("/Home");
      } else {
        // No user is signed in.
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <LoginWithEmail />
        </div>

        <div className="row">
          <div className="col s3 offset-s4">
            <h4 className="waves-effect waves-light btn" onClick={()=> { LoginWithFacebook() }}>Iniciar con Facebook</h4>
          </div>
        </div>

        <div className="row">
          <div className="col s3 offset-s4">
            <h4 className="waves-effect waves-light btn" onClick={()=> { LoginWithGoogle() }}>Ingresar con Google</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
