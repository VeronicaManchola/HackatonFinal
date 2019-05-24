import React, { Component } from 'react';
import BottomBtn from '../HomeScreen/BottomBtn';

class HgwMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            endPoint: null,
            lat: props.location.state.latLng[0],
            lng: this.props.location.state.latLng[1]
        }
    }

    componentDidMount() {
        let address = this.props.location.state.address;
        let splitAddress = address.split(" ")
        let joinAddress = splitAddress.join("-");
        this.setState({ endPoint: joinAddress });
    }

    render() {
        return (
            <div>
                <iframe
                    width="100%"
                    height="600"
                    src={`https://mobile.here.com/directions/Calle-Puma:-33.419498,-70.642029/${this.state.endPoint}:${this.state.lat},${this.state.lng}?msg=${this.state.endPoint}`}></iframe>
                <BottomBtn />
            </div>
        )
    }
}

export default HgwMap;