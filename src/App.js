import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './Firebase.js'
import Menu from './Components/Menu/Menu'
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
        this.props.history.push("/Home");
      } else {
        // No user is signed in.
      };
    })

  }

  render() {
    return (
      <div>
        <nav className="nav-wrapper cyan accent-2" >
          <Menu />
        </nav>
        <div className="container">
          <div className="row">
            <LoginWithEmail />
          </div>
          <div className="row">
            <div className="col s3 offset-s4">
              <h4 className="waves-effect waves-light btn" onClick={() => { LoginWithFacebook() }}>Iniciar con Facebook</h4>
            </div>
          </div>
          <div className="row">
            <div className="col s3 offset-s4">
              <h4 className="waves-effect waves-light btn" onClick={() => { LoginWithGoogle() }}>Ingresar con Google</h4>
            </div>
          </div>
          <div className="row">
            <div className="col s10 offset-s2">
              <span><Link to='./RegisterForm'></Link>¿No tienes una cuenta? Registrate aquí.</span>
            </div>
        </div>
      </div>
    )
  }
}

export default App;