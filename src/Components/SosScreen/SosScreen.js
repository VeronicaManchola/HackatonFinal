import React, { Component } from 'react'
import MenuCiclist from '../Menu/MenuCiclist';
import BottomBtn from '../HomeScreen/BottomBtn';
import Button from 'react-materialize/lib/Button';

class SosScreen extends Component {

    render() {
        return (
            <div>
                <MenuCiclist />
                <div className="container">
                    <div className="row center">
                        <div className="col s12 center sosCol">
                            <Button className="waves-effect waves-light btn-extralarge sosBtn">
                                <img
                                    src={"https://raw.githubusercontent.com/puliv/HackatonFinal/master/public/assets/neumaticoroto.png"}
                                    alt="Neumatico"
                                    className="sosImg" />
                                <h6>Neumático
                                <br />Roto</h6>
                            </Button>
                            <Button className="waves-effect waves-light btn-extralarge sosBtn">
                                <img
                                    src={"https://raw.githubusercontent.com/puliv/HackatonFinal/master/public/assets/cadena_rota.png"}
                                    alt="Cadena"
                                    className="sosImg" />
                                <h6>Cadena
                                    <br />Rota</h6>
                            </Button>
                            <br />
                            <Button className="waves-effect waves-light btn-extralarge sosBtn">
                                <img
                                    src={"https://raw.githubusercontent.com/puliv/HackatonFinal/master/public/assets/c%C3%A1mara_pinchada.png"}
                                    alt="camara"
                                    className="sosImg" />
                                <h6>
                                    Camara
                                <br />Pinchada
                                </h6>
                            </Button>
                            <Button className="waves-effect waves-light btn-extralarge sosBtn">
                                <img
                                    src={"https://raw.githubusercontent.com/puliv/HackatonFinal/master/public/assets/dano_pinon.png"}
                                    alt="pinon"
                                    className="sosImg" />
                                <h6>
                                    Daño en el
                                    <br />Piñon
                                </h6>
                            </Button>
                            <br />
                            <Button className="waves-effect waves-light btn-extralarge sosBtn">
                                <img
                                    src={"https://raw.githubusercontent.com/puliv/HackatonFinal/master/public/assets/rayos_rotos.png"}
                                    alt="rayos"
                                    className="sosImg" />
                                <h6>
                                    Rayos
                                    <br />Rotos
                                </h6>
                            </Button>
                            <Button className="waves-effect waves-light btn-extralarge sosBtn">
                                <img
                                    src={"https://raw.githubusercontent.com/puliv/HackatonFinal/master/public/assets/frenos_sueltos.png"}
                                    alt="frenos"
                                    className="sosImg" />
                                <h6>
                                    Frenos
                                <br />Sueltos
                                </h6>
                            </Button>
                        </div>
                        <div className="col s12 center">
                            <Button className="btn-flat white-text btnNav sosCol">
                                Solicitar Mecánico
                        </Button>
                        </div>
                    </div>
                </div >
                <BottomBtn />
            </div >
        )
    }
}

export default SosScreen