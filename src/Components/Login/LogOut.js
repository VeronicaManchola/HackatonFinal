import React, { Component } from 'react';
import { SideNavItem } from 'react-materialize';
import firebase from 'firebase';

class LogOut extends Component {

    handleClick(){
        firebase
        .auth()
        .signOut()
        .then(() => {
            console.log("logged out!");
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    render(){
        return <SideNavItem waves href="#!seventh" icon="exit_to_app" onClick={this.handleClick}>Cerrar sesión</SideNavItem>
    }
}

export default LogOut;