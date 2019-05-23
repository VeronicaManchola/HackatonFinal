import neumatico from '../assets/neumaticoroto.png'
import React, { Component } from 'react'
import MenuCiclist from '../Menu/MenuCiclist';
import BottomBtn from '../HomeScreen/BottomBtn';
import Button from 'react-materialize/lib/Button';

class SosScreen extends Component {

    render() {
        return (
            <div>
                <MenuCiclist />
                <img src={neumatico} alt="Neumatico"/>
                <div className="container">
                    <div className="row center">
                        <div className="col s12">
                            <Button className="waves-effect waves-light btn-large">
                                Neumatico Roto</Button>
                            <Button className="waves-effect waves-light btn-large">Cadena Rota</Button>
                            <br />
                            <Button className="waves-effect waves-light btn-large">Camara Pinchada</Button>
                            <Button className="waves-effect waves-light btn-large">Daño en el Piñon</Button>
                            <br />
                            <Button className="waves-effect waves-light btn-large">Rayos Rotos</Button>
                            <Button className="waves-effect waves-light btn-large">Frenos Sueltos</Button>
                        </div>
                    </div>
                </div>
                <BottomBtn />
            </div>
        )
    }
}

export default SosScreen