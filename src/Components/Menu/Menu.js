import React, { Component } from 'react';
// import M from 'materialize-css'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Button, SideNav, SideNavItem } from 'react-materialize';

class Menu extends Component {
    // constructor() {
    //     super();
    // }

    // componentDidMount() {
    //     // Auto initialize all the things!
    //     M.AutoInit();
    // }

    handleClick = () => {
        console.log("hola")
    }

    render() {
        return (
            <div className="container">
                <div className="row col-12">
                    <SideNav trigger={<Button />} options={{ closeOnClick: true }}>
                        <SideNavItem userView user={{
                            background: 'https://placeimg.com/640/480/tech',
                            image: 'static/media/react-materialize-logo.824c6ea3.svg',
                            name: 'John Doe'
                        }}
                        />
                        <SideNavItem href="#!icon" icon="directions_bike">
                            First Link With Icon
                            </SideNavItem>
                        <SideNavItem waves href="#!second">
                            Second Link
                        </SideNavItem>
                        <SideNavItem waves href="#!third">
                            Third Link
                        </SideNavItem>
                        <SideNavItem waves href="#!fourth">
                            Fourth Link
                        </SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem subheader>
                            Subheader
                        </SideNavItem>
                    </SideNav>
                </div>
            </div>
        )
    }
}


export default Menu
