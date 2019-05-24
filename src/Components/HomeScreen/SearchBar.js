import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: null,
            latLng: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props) {
        const index = props.markerAddress ? props.markerAddress.indexOf("<") : null;
        const partialAddress = index ? props.markerAddress.slice(0, index) : null;
        const remAddress = partialAddress ? props.markerAddress.slice(index + 5, props.markerAddress.length) : null;
        const address = remAddress ? partialAddress + ", " + remAddress : null;

        this.setState({ address: address, latLng: props.markerLatLng })
    }

    handleChange(event) {
        let coord = event.target.getAttribute("coord");
        this.setState({ address: event.target.value, latLng: coord });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s5 offset-s3">
                        <input id="inputAddress" coord={this.state.latLng} value={this.state.address} placeholder="Dirección del taller" onChange={this.handleChange}></input>
                    </div>
                    <div className="cols3">
                        <h4><Link to={{ pathname: "/HwgMap", state: { address: this.state.address, latLng: this.state.latLng}}} className="waves-effect waves-light btn">Ir</Link></h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;