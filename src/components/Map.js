import React, { useEffect } from 'react';

// Sample restaurant data with latitude and longitude
const restaurants = [
  { id: 1, name: 'Maison de Lumière', lat: 37.7749, lng: -122.4194 },
  { id: 2, name: 'The Copper Grove', lat: 37.7849, lng: -122.4094 },
  { id: 3, name: 'Étoile Blanche', lat: 37.7949, lng: -122.4294 },
];

const Map = () => {
  useEffect(() => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    // Check if the script is already added to avoid adding multiple scripts
    if (!window.google || !window.google.maps) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      window.initMap(); // If Google Maps is already available, just initialize the map
    }

    // Define the initMap function to initialize the map
    window.initMap = function () {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Example center: San Francisco
        zoom: 12,
      });

      // Create an array to store markers so they can be cleaned up later
      const markers = [];

      // Loop through the restaurants and place markers
      restaurants.forEach((restaurant) => {
        const marker = new window.google.maps.Marker({
          position: { lat: restaurant.lat, lng: restaurant.lng },
          map: map,
          title: restaurant.name,
        });

        markers.push(marker); // Save the marker to cleanup later

        // Optionally add info windows for each marker
        const infoWindow = new window.google.maps.InfoWindow({
          content: `<h3>${restaurant.name}</h3>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      // Store the map and markers so they can be cleaned up
      window._mapInstance = { map, markers };
    };

    // Cleanup function to remove markers and reset map instance
    return () => {
      if (window._mapInstance) {
        window._mapInstance.markers.forEach((marker) => marker.setMap(null)); // Remove all markers
        window._mapInstance.map = null; // Reset map instance
        window._mapInstance.markers = [];
        delete window._mapInstance;
      }
    };
  }, []);

  return (
    <div>
      <h2>Map</h2>
      <div id="map" style={{ width: '100%', height: '400px' }}>This is the Map</div>
    </div>
  );
};

export default Map;
