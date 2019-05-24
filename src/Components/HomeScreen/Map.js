import React from 'react';


export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.platform = null;
        this.map = null;

        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            // center: {
            //     lat: props.lat,
            //     lng: props.lng,
            // },
            zoom: props.zoom,
            useHTTPS: true,
            bikeHelp: [],
            bikeStore: [],
            bikeTechService: [],
            ui: null,
            vicinity: null,
            latLng: null
        }

        this.markers = [];
        this.currentPosition = false;
    }


    componentDidMount() {
        this.platform = new window.H.service.Platform(this.state);

        let defaultLayers = this.platform.createDefaultLayers();
        let mapContainer = this.refs["map-container"];

        this.map = new window.H.Map(
            mapContainer,
            defaultLayers.normal.map, {
                center: {
                    lat: this.props.lat,
                    lng: this.props.lng,
                },
                zoom: this.state.zoom,
            });
        //permite que se pueda hacer zoom en el mapa
        let events = new window.H.mapevents.MapEvents(this.map);
        // eslint-disable-next-line
        let behavior = new window.H.mapevents.Behavior(events);
        // eslint-disable-next-line
        let ui = new window.H.ui.UI.createDefault(this.map, defaultLayers)
        this.setState({ ui: ui });

        if (this.currentPosition) {
            console.log(this.currentPosition)
            this.map.removeObjects([this.currentPosition])
        }
        this.currentPosition = new window.H.map.Marker({
            lat: this.props.lat,
            lng: this.props.lng
        })
        this.map.addObjects([this.currentPosition])

        //////////////////////////////////this.props.lat para bicicletas
        fetch('https://places.cit.api.here.com/places/v1/browse?in=-33.41915,-70.6418;r=2000&q=bicicletas&Accept-Language=es-ES%2Ces%3Bq%3D0.9%2Cen%3Bq%3D0.8&app_id=fhk2odOlobSO5rRWPQ73&app_code=BgS4fH56ONRVytxVXgfF0w')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                let bikesPosition = data.results.items.filter(bicistore => {
                    return bicistore.position;
                })
                return bikesPosition;
            })
            .then(data => {
                this.setState({
                    ...this.state,
                    bikeHelp: data,
                },
                    () => {
                        console.log(this.state.bikeHelp)
                        this.showBicycleStores();
                    }
                )
            })
        /////////////////////////// busca cicles pero estan lejos
        fetch('https://places.cit.api.here.com/places/v1/browse?in=-33.41915,-70.6418;r=5000&q=cicles&Accept-Language=es-ES%2Ces%3Bq%3D0.9%2Cen%3Bq%3D0.8&app_id=fhk2odOlobSO5rRWPQ73&app_code=BgS4fH56ONRVytxVXgfF0w')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                let bikesPosition = data.results.items.filter(bicistore => {
                    return bicistore.position;
                })
                return bikesPosition;
            })
            .then(data => {
                this.setState({
                    ...this.state,
                    bikeStore: data,
                },
                    () => {
                        console.log(this.state.bikeStore)
                        this.showBicycleStoresReal();
                    }
                )
            })
        ///////////////////////////servicio tecnico de bicicletas
        fetch('https://places.cit.api.here.com/places/v1/browse?in=-33.41915,-70.6418;r=5000&q=bici+taller&Accept-Language=es-ES%2Ces%3Bq%3D0.9%2Cen%3Bq%3D0.8&app_id=fhk2odOlobSO5rRWPQ73&app_code=BgS4fH56ONRVytxVXgfF0w')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                let bikesPosition = data.results.items.filter(bicistore => {
                    return bicistore.position;
                })
                return bikesPosition;
            })
            .then(data => {
                this.setState({
                    ...this.state,
                    bikeStore: data,
                },
                    () => {
                        console.log(this.state.bikeStore)
                        this.showBicycleTechService();
                    }
                )
            })
    }

    componentDidUpdate() {
        if (this.currentPosition) {
            this.map.removeObjects([this.currentPosition])
            this.currentPosition = new window.H.map.Marker({
                lat: this.props.lat,
                lng: this.props.lng
            })
            // console.log(this.currentPosition);
            this.map.addObjects([this.currentPosition])
            this.map.setCenter({ lat: this.props.lat, lng: this.props.lng });
        }
        // if (this.props.marker && this.markers.indexOf(this.props.marker) === -1) {

        //     this.newMarker = new window.H.map.Marker({
        //         lat: this.props.marker.lat,
        //         lng: this.props.marker.long
        //     });
        //     this.map.addObjects([this.newMarker])
        // }   
    }

    showBicycleTechService() {
        this.state.bikeTechService.forEach(bikes => {
            let icon = new window.H.map.Icon('./assets/bike-parking.png', { size: new window.H.math.Size(26, 34) }, { anchor: new window.H.math.Point(14, 34) });
            let marker = new window.H.map.Marker({ lat: bikes.position[0], lng: bikes.position[1] }, { icon: icon })
            this.map.addObject(marker);
            marker.addEventListener("tap", (evt) => {
                let info = new window.H.ui.InfoBubble(evt.target.getPosition(), {
                    content: `<h5>${bikes.title}</h5>
                            <h6>${bikes.vicinity}</h6>`
                })
                this.state.ui.addBubble(info);
                this.setState({vicinity: bikes.vicinity, latLng: bikes.position});
                this.props.markerInfo(this.state.vicinity, this.state.latLng);
            }, false)
        });
        // console.log(this.map.getObjects())
    }

    showBicycleStores() {
        this.state.bikeHelp.forEach(bikes => {
            let icon = new window.H.map.Icon('./assets/marcadorbicicleta.png', { size: new window.H.math.Size(26, 34) }, { anchor: new window.H.math.Point(14, 34) });
            let marker = new window.H.map.Marker({ lat: bikes.position[0], lng: bikes.position[1] }, { icon: icon })
            this.map.addObject(marker);
            marker.addEventListener("tap", (evt) => {
                let info = new window.H.ui.InfoBubble(evt.target.getPosition(), {
                    content: `<h5>${bikes.title}</h5>
                            <h6>${bikes.vicinity}</h6>`
                })
                this.state.ui.addBubble(info);
                this.setState({vicinity: bikes.vicinity, latLng: bikes.position});
                this.props.markerInfo(this.state.vicinity, this.state.latLng);
            }, false)
        });
        // console.log(this.map.getObjects())
    }

    showBicycleStoresReal() {
        this.state.bikeStore.forEach(bikes => {
            let icon = new window.H.map.Icon('./assets/bike_map_marker_225-icon.png', { size: new window.H.math.Size(26, 34) }, { anchor: new window.H.math.Point(14, 34) });
            let marker = new window.H.map.Marker({ lat: bikes.position[0], lng: bikes.position[1] }, { icon: icon })
            this.map.addObject(marker);
            marker.addEventListener("tap", (evt) => {
                let info = new window.H.ui.InfoBubble(evt.target.getPosition(), {
                    content: `<h5>${bikes.title}</h5>
                            <h6>${bikes.vicinity}</h6>`
                })
                this.state.ui.addBubble(info);
                this.setState({vicinity: bikes.vicinity, latLng: bikes.position});
                this.props.markerInfo(this.state.vicinity, this.state.latLng);
            }, false)
        });
        // console.log(this.map.getObjects())
    }

    render() {
        return (
            <div ref="map-container" style={{ width: '100%', height: '400px', background: 'grey' }}>
            </div>
        )
    }

}    
