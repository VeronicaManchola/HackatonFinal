import React from 'react';
import Map from './Map.js';
// import LogOut from '../Login/LogOut.js';
import MenuCiclist from '../Menu/MenuCiclist.js';
import SearchBar from './SearchBar.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            app_id: "fhk2odOlobSO5rRWPQ73",
            app_code: "BgS4fH56ONRVytxVXgfF0w"
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
                {/* <div className="container">
                    <div className="row">
                        <button onClick={() => LogOut(this.props, this.state.watchId)}>Cerrar sesión</button>
                    </div>
                </div> */}
                <Map
                    app_id={this.state.app_id}
                    app_code={this.state.app_code}
                    zoom="14"
                    lat={this.state.lat ? this.state.lat : "-33.4489"}
                    lng={this.state.lng ? this.state.lng : "-70.6693"}
                    marker={this.state.marker}
                />
                <SearchBar />
            </div>
        )
    }
}

export default Home;