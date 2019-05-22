import React from 'react';

export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.platform = null;
        this.map = null;

        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            center: {
                lat: props.lat,
                lng: props.lng,
            },
            zoom: props.zoom,
            useHTTPS: true
        }

        this.markers = [];
        this.currentPosition = false;
    }


    componentDidMount() {
        this.platform = new window.H.service.Platform(this.state);

        var defaultLayers = this.platform.createDefaultLayers();
        var mapContainer = this.refs["map-container"];

        this.map = new window.H.Map(
            mapContainer,
            defaultLayers.normal.map, {
                center: this.state.center,
                zoom: this.state.zoom,
            });
        //permite que se pueda hacer zoom en el mapa
        var events = new window.H.mapevents.MapEvents(this.map);
        // eslint-disable-next-line
        var behavior = new window.H.mapevents.Behavior(events);
        // eslint-disable-next-line
        var ui = new window.H.ui.UI.createDefault(this.map, defaultLayers)    

        if(this.currentPosition) {
            console.log(this.currentPosition)
            this.map.removeObjects([this.currentPosition])
        }
        this.currentPosition = new window.H.map.Marker({
            lat: this.props.lat,
            lng: this.props.lng
        })
        this.map.addObjects([this.currentPosition])
        }


        componentDidUpdate() {
            if (this.currentPosition) {
                this.map.removeObjects([this.currentPosition])
                this.currentPosition = new window.H.map.Marker({
                    lat: this.props.lat,
                    lng: this.props.lng
                })
                this.map.addObjects([this.currentPosition])
            }
            // if (this.props.marker && this.markers.indexOf(this.props.marker) === -1) {
    
            //     this.newMarker = new window.H.map.Marker({
            //         lat: this.props.marker.lat,
            //         lng: this.props.marker.long
            //     });
            //     this.map.addObjects([this.newMarker])
            // }   
        }       
            
    render() {
        return(
            <div   ref="map-container" style={{ width: '100%', height: '400px', background: 'grey'}}>
            </div>
        )
    }

}    
