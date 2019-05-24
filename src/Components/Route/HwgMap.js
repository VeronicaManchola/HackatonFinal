import React, { Component } from 'react';

class HgwMap extends Component {

    constructor(props){
        super(props);

        this.state = {
            endPoint: null,
            lat: props.location.state.latLng[0],
            lng: this.props.location.state.latLng[1]
        }
    }

    componentDidMount(){
        let address = this.props.location.state.address;
        let splitAddress = address.split(" ")
        let joinAddress = splitAddress.join("-");
        this.setState({ endPoint: joinAddress });
    }

    render(){
        return(
            <iframe 
            width="100%" 
            height="600" 
            src={`https://wego.here.com/directions/mix/Calle-Puma,-8420000-Recoleta,-Recoleta,-Region-Santiago-Metropolitan,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUNhbGxlK1B1bWE7bGFuZz1lcztsYXQ9LTMzLjQxOTQ5ODQ0MzYwMzUxNjtsb249LTcwLjY0MjAyODgwODU5Mzc1O3N0cmVldD1DYWxsZStQdW1hO2NpdHk9UmVjb2xldGE7cG9zdGFsQ29kZT04NDIwMDAwO2NvdW50cnk9Q0hMO2Rpc3RyaWN0PVJlY29sZXRhO3N0YXRlPVJlZ2lvbitTYW50aWFnbytNZXRyb3BvbGl0YW47c3RhdGVDb2RlPVJNO2NvdW50eT1TYW50aWFnbztjYXRlZ29yeUlkPXN0cmVldC1zcXVhcmU7c291cmNlU3lzdGVtPWludGVybmFsO3Bkc0NhdGVnb3J5SWQ9OTAwLTk0MDAtMDQwMQ/${this.state.endPoint}?map=${this.state.lat},${this.state.lng},15,normal`}></iframe>
        )
    }
}

export default HgwMap;