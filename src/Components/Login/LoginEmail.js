import React, { Component } from 'react';
import firebase from 'firebase';
import { TextInput } from 'react-materialize';


class LoginWithEmail extends Component {

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
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.props.history.push('/Home');
                console.log("logged in!")
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };

    render() {
        const { email, password, error } = this.state;
        return (
            <div className="container">
                <div className="row center lgnemail">
                    {error ? <p>{error.message}</p> : null}
                </div>
                <div className="center">
                    <div className="input-field col s12">
                        {/* <label htmlFor="inputEmail"></label> */}
                        <TextInput label="Correo Electrónico" id="inputEmail" type="email" name="email" value={email} onChange={this.handleInputChange} />
                        {/* <label htmlFor="inputPasword"></label> */}
                        <TextInput label="Contraseña" id="inputPasword" type="password" name="password" value={password} onChange={this.handleInputChange} />
                        <br/>
                        <br/>
                        <button onClick={this.handleSubmit} className="waves-effect waves-light btn-flat btnNav z-depth 3">Ingresar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginWithEmail;