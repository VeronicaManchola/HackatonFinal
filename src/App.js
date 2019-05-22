import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './Firebase.js'
import Menu from './Components/Menu/Menu'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("logged in!")
        this.props.history.push("/");
      } else {
        // No user is signed in.
      }
    });
  }

  render() {
    return (
      <div>
        <nav className="nav-wrapper cyan accent-2" >
          <Menu />
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s3 offset-s4">
              <h4 className="waves-effect waves-light btn"><Link to="/LoginEmail">Ingresar con Email</Link></h4>
            </div>
          </div>

          <div className="row">
            <div className="col s3 offset-s4">
              <h4 className="waves-effect waves-light btn"><Link to="/LoginFacebook">Ingresar con Facebook</Link></h4>
            </div>
          </div>

          <div className="row">
            <div className="col s3 offset-s4">
              <h4 className="waves-effect waves-light btn"><Link to="/LoginGoogle">Ingresar con Google</Link></h4>
            </div>
          </div>
        </div>

      </div >
      



    )
  }
}

export default App;
