
import React from 'react';
import './App.css';
import Map from './components/map';

export default class App extends React.Component {
  constructor(props) {
    super(props);

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


    this.state = {
      app_id: "fhk2odOlobSO5rRWPQ73",
      app_code: "BgS4fH56ONRVytxVXgfF0w",
    }
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          this.setState({
            ...this.state,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          this.setState({
            ...this.state,
            error: error.message
          })
        }
      );
    }
  }

  render() {
    return(
      <div>
        <Map 
        app_id={this.state.app_id}
        app_code={this.state.app_code}
        zoom="14"
        lat={this.state.lat ? this.state.lat : "-33.4489"}
        lng={this.state.lng ? this.state.lng : "-70.6693"}
        marker={this.state.marker}
        />

      </div>
    )
  }

}