import React, { Component } from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import LogOut from '../Login/LogOut.js';

class MenuCiclist extends Component {

    render() {
        return (
            <nav className="btnNav">
                <SideNav trigger={
                    <Button className="btnNav btn-flat">
                        <a href=" " className="cyan-accent-2 z-depth 3">
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
                    <LogOut />
                </SideNav>
            </nav>
        )
    }
}


export default MenuCiclist
