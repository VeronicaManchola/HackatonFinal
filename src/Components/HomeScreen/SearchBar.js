import React, { Component } from 'react';

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
            <div className="container">
                <div className="row">
                    <div className="col s5 offset-s3">
                        <input id="inputAddress" name="address" value={address} placeholder="Dirección del taller" onChange={this.handleInputChange}></input>
                    </div>
                    <div className="cols3">
                        <button onClick={this.handleSubmit} className="waves-effect waves-light btn">Ir</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;