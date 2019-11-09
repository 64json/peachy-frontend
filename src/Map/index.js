import React from 'react';
import './stylesheet.scss';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

function Map({ center, children }) {
  return (
    <GoogleMap
      options={{
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
      }}
      zoom={center ? 15 : 13}
      center={center || { lat: 37.551353, lng: 126.988241 }}
      clickableIcons={false}>
      {children}
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));
