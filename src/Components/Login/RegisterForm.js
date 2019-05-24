import React, { Component } from 'react';
import firebase from 'firebase';

class RegisterForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: null
        };
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.props.history.push('/Home');
                console.log("logged in!")
            })
            .catch(function (error) {
                this.setState({ error: error });
            });
    };

    render() {
        const { email, password, error } = this.state;
        return (
            <div className="container">
                <div className="row center-align">
                    {error ? <p>{error.message}</p> : null}
                </div>
                <div className="row">
                    <div className="col s5 center-align">
                        <label htmlFor="inputEmail">Correo electrónico</label>
                        <input id="inputEmail" type="email" name="email" value={email} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="col s5 center-align">
                        <label htmlFor="inputPasword">Contraseña</label>
                        <input id="inputPasword" type="password" name="password" value={password} onChange={this.handleInputChange}></input>
                    </div>
                    <br />
                    <div className="row center-align">
                        <button onClick={this.handleSubmit} className="waves-effect waves-light btn">Registrate</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForm;