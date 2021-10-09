import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Map = ({ locations }) => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };


    console.log(locations)

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                center={locations ? locations.center : defaultProps.center}
                zoom={locations ? locations.zoom : defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}