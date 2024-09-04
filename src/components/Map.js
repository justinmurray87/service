// src/components/Map.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import googleApiConfig from '../config/googleApiConfig';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const Map = ({ selectedCity }) => {
  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Update center based on selectedCity
    // Hardcoded values for demo purposes
    if (selectedCity === 'San Francisco') {
      setCenter({ lat: 37.7749, lng: -122.4194 });
    }
    // Add more conditions for other cities

    // Fetch top restaurants and update markers
    // Hardcoded markers for demo purposes
    setMarkers([
      { lat: 37.7749, lng: -122.4194, name: 'Restaurant 1' },
      { lat: 37.7849, lng: -122.4094, name: 'Restaurant 2' },
    ]);
  }, [selectedCity]);

  return (
    <LoadScript googleMapsApiKey={googleApiConfig.apiKey}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
        {markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} title={marker.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
