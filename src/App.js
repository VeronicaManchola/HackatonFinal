import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './Firebase.js'
import './App.css';
import LoginWithEmail from './Components/Login/LoginEmail.js';
import LoginWithFacebook from './Components/Login/LoginFacebook.js';
import LoginWithGoogle from './Components/Login/LoginGoogle.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("logged in!");
        this.setState({ user: user });
        this.props.history.push("/Home");
      } else {
        // No user is signed in.
      };
    })

  }

  render() {
    return (
        <div className="container">
          <div className="row">
              <LoginWithEmail />
            <div className="col s12 center socialBtn">
              <h4 className="waves-effect small waves-light btn fbBtn" onClick={() => { LoginWithFacebook() }}>Iniciar con Facebook</h4>
              <h4 className="waves-effect small waves-light btn gglBtn" onClick={() => { LoginWithGoogle() }}>Iniciar con Google</h4>
            </div>
          </div>
          <div className="row">
            <div className="col s12 center lgnemail">
              <span>¿No tienes una cuenta?</span>
              <span><Link to='./RegisterForm' className="textColor"> Registrate aquí.</Link></span>
            </div>
        </div>
      </div>
    )
  }
}

export default App;