// src/components/CitySelector.js
import React, { useState, useEffect } from 'react';
import cities from '../data/cities';

const CitySelector = ({ selectedCity, setSelectedCity }) => {
  const [geoLocation, setGeoLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setGeoLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // Implement logic to set the closest city based on geoLocation in the future
        },
        () => console.log("Geo-location permission denied")
      );
    }
  }, []);

  return (
    <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
      {cities.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
