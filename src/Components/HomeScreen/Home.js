import React from 'react';
import Map from './Map.js';
import firebase from '../../Firebase.js';
import MenuCiclist from '../Menu/MenuCiclist.js';
import SearchBar from './SearchBar.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            app_id: "fhk2odOlobSO5rRWPQ73",
            app_code: "BgS4fH56ONRVytxVXgfF0w",
            watchId: null,
            user: null,
            address: null,
            latLng: null
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            let ref = navigator.geolocation.watchPosition(
                (position) => {
                    this.setState({
                        ...this.state,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        error: null,
                    });
                },
                (error) => {
                    this.setState({
                        ...this.state,
                        error: error.message
                    })
                }
            );
            this.setState({ watchId: ref })
        }
    }

    componentDidUpdate(){
        let user = firebase.auth().currentUser;
        if(this.state.user === user){
            this.props.history.push("/");
            navigator.geolocation.clearWatch(this.state.watchId);
        }
    }

    pickedMarker = (address, latLng) => {
        this.setState({ address: address, latLng: latLng })
    }

    render() {
        return (
            <div>
                <MenuCiclist />
                <Map
                    app_id={this.state.app_id}
                    app_code={this.state.app_code}
                    zoom="14"
                    lat={this.state.lat ? this.state.lat : "-33.4489"}
                    lng={this.state.lng ? this.state.lng : "-70.6693"}
                    marker={this.state.marker}
                    markerInfo={this.pickedMarker}
                />
                <div className="row">
                    <SearchBar markerAddress={this.state.address} markerLatLng={this.state.latLng}/>
                </div>
            </div>
        )
    }
}

export default Home;