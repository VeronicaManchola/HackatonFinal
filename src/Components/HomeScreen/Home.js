import React from 'react';
import Map from './Map.js';
import LogOut from '../Login/LogOut.js';
import MenuCiclist from '../Menu/MenuCiclist.js';
import SearchBar from './SearchBar.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            app_id: "fhk2odOlobSO5rRWPQ73",
            app_code: "BgS4fH56ONRVytxVXgfF0w",
            lat: false,
            lng: false,
            // lat: "-33.41915",
            // lng: "-70.6418",
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

    render() {
        return (
            <div>
                <MenuCiclist />
                <div className="container">
                    <div className="row">
                        <button onClick={() => LogOut(this.props, this.state.watchId)}>Cerrar sesión</button>
                    </div>
                </div>
                {this.state.lat && <Map
                    app_id={this.state.app_id}
                    app_code={this.state.app_code}
                    zoom="14"
                    lat= {this.state.lat}
                    lng={this.state.lng}
                    marker={this.state.marker}
                />}
                <div className="row">
                    <SearchBar />
                </div>
            </div>
        )
    }
}

export default Home;