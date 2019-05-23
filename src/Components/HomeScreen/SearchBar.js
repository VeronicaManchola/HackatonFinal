import React, { Component } from 'react';
import { TextInput } from 'react-materialize';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const address = this.state.address;
    };

    render() {
        const address = this.state.address;
        return (
            <div className="container center">
                <div className="row">
                    <div className="col s1 searchBar anotherClass">
                        <i className="material-icons lctnIcon">location_on</i>
                    </div>
                    <div className="col s8 searchBar">
                        <TextInput
                            id="inputAddress"
                            name="address" value={address}
                            placeholder="Ingresar dirección del taller"
                            onChange={this.handleInputChange}>
                        </TextInput>
                    </div>
                    <div className="col s3 searchBar">
                        <button onClick={this.handleSubmit} className="waves-effect waves-light btn-flat btnNav white-text btnIr center">Ir</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;