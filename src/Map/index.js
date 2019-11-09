import React from 'react';
import './stylesheet.scss';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 37.551353, lng: 126.988241 }}
      options={{
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
      }}
      clickableIcons={false}>
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));
