import { Component } from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import "./styles.css";

const A = () => <div> Hello I am A</div>;

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeComponent: null,
        activeMarker: {},
        selectedPlace: {},
        markers: [
            {
                lat: 30.202536557946495,
                lng: 71.51609153956258,
                title: "Madni Chowk",
                component: <A />
            },
            {
                lat: 30.20638269979681,
                lng: 71.50489515490405,
                title: "Gulistan Chowk",
                component: <A />
            },
            {
                lat: 30.209439776342048,
                lng: 71.51349781072737,
                title: "Office",
                component: <A />
            },
            {
                lat: 30.196027242651713,
                lng: 71.50310051257446,
                title: "Technovez",
                component: <A />
            }
        ]
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                initialCenter={{
                    lat: 30.196027242651713,
                    lng: 71.50310051257446
                }}
                google={this.props.google}
                onClick={this.onMapClicked}
            >
                {this.state.markers.map((marker) => (
                    <Marker
                        onClick={(props, m) => {
                            this.onMarkerClick(props, m);
                            this.setState({ activeComponent: marker.component });
                        }}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        name={marker.title}
                    />
                ))}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                >
                    {this.state.activeComponent}
                    {/* <input value={this.state.selectedPlace.name} />
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
                </InfoWindow>
            </Map>
        );
    }
}

// const MapContainer = ({google}) => {

// }

const MapComponent = GoogleApiWrapper({
    apiKey: "AIzaSyAIwngedpRLj2Ln0zu941f8sSotIAGyOZ8"
})(MapContainer);
