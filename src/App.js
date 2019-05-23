import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './Firebase.js'
// import Menu from './Components/Menu/Menu'
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
        {/* <nav className="cyan accent-2" >
          <Menu />
        </nav> */}
        <div className="container">
          <div className="row">
            {/* <div className="col s12 center">
              <i className="material-icons medium loginBike">directions_bike</i> */}
              <LoginWithEmail />
            {/* </div> */}
          {/* </div>
          <div className="row"> */}
            <div className="col s12 center socialBtn">
              <h4 className="waves-effect small waves-light btn fbBtn" onClick={() => { LoginWithFacebook() }}>Iniciar con Facebook</h4>
              <h4 className="waves-effect small waves-light btn gglBtn" onClick={() => { LoginWithGoogle() }}>Iniciar con Google</h4>
            </div>
          </div>
          <div className="row">
            <div className="col s12 center lgnemail">
              <span>
                <Link to='./RegisterForm'></Link>¿No tienes una cuenta?</span>
                <span className="textColor"> Registrate aquí.</span>
            </div>
          </div>
        </div >
      </div>
    )
  }
}

export default App;