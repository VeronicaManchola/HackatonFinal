import React from 'react';
import './App.css';
import Map from './components/map';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      app_id: "fhk2odOlobSO5rRWPQ73",
      app_code: "BgS4fH56ONRVytxVXgfF0w",
    }
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
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
    }
  }

  render() {
    return(
      <div>
        <Map 
        app_id={this.state.app_id}
        app_code={this.state.app_code}
        zoom="14"
        lat={this.state.lat ? this.state.lat : "-33.4489"}
        lng={this.state.lng ? this.state.lng : "-70.6693"}
        marker={this.state.marker}
        />

      </div>
    )
  }

}