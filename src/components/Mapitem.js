import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Mapitem(){
  const defaultProps = {
    center: {
      lat: 25.27790199569048,
      lng: 83.00229626391335
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '28vh', width: '110%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyByJgjQDj8k37d2SQ8HQueE6TuFVTAS3rw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}