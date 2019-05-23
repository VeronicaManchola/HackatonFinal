import React, { Component } from 'react';
// import LogOut from '../Login/LogOut.js';
import { SideNav, SideNavItem, Button } from 'react-materialize';

class MenuCiclist extends Component {
    // constructor(props) {
    //     super(props);
    //         }

    render() {
        return (
            <nav className="btnNav">
                <h6 className="brand-logo center">Talleres</h6>
                <SideNav trigger={
                    <Button className="btnNav btn-flat pddng">
                        <a href=" " className="teal accent-3 z-depth 3">
                            <i className="material-icons">menu</i>
                        </a>
                    </Button>} options={{ closeOnClick: true }}>
                    <SideNavItem userView user={{
                        // image: ,
                        name: 'Name'
                    }} className="black-text" />
                    <SideNavItem href="#!icon" icon="directions_bike">
                        BiciHelper
                        </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem waves href="#!second" icon="notifications_none">
                        Notificaciones
                        </SideNavItem>
                    <SideNavItem waves href="#!third" icon="message">
                        Mensajes
                        </SideNavItem>
                    <SideNavItem waves href="#!fourth" icon="record_voice_over">
                        Mis Solicitudes
                        </SideNavItem>
                    <SideNavItem waves href="#!fifth" icon="favorite_border">
                        Talleres Favoritos
                        </SideNavItem>
                    <SideNavItem waves href="#!sixth" icon="help_outline">
                        Ayuda
                        </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem waves href="#!seventh" icon="exit_to_app">
                        Cerrar Sesión
                        </SideNavItem>
                </SideNav>
            </nav>
        )
    }
}


export default MenuCiclist
