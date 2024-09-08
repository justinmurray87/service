import React, { useEffect } from 'react';

// Sample restaurant data with latitude and longitude
const restaurants = [
  { id: 1, name: 'Maison de Lumière', lat: 37.7749, lng: -122.4194 },
  { id: 2, name: 'The Copper Grove', lat: 37.7849, lng: -122.4094 },
  { id: 3, name: 'Étoile Blanche', lat: 37.7949, lng: -122.4294 },
  // Add more restaurants as needed
];

const Map = () => {
  useEffect(() => {
    const googleMapsApiKey = 'AIzaSyCkCGLUow0ZFgvp7o2MAOjlZZxZoihs4Vo'; // Your API Key

    // Check if the script is already added to avoid adding multiple scripts
    if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
      script.async = true;  // Ensures asynchronous loading
      script.defer = true;  // Defers execution until HTML is fully parsed
      document.body.appendChild(script);
    }

    // Define the initMap function to initialize the map
    window.initMap = function () {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Example center: San Francisco
        zoom: 12,
      });

      // Loop through the restaurants and place markers
      restaurants.forEach((restaurant) => {
        const marker = new window.google.maps.Marker({
          position: { lat: restaurant.lat, lng: restaurant.lng },
          map: map,
          title: restaurant.name,
        });

        // Optionally add info windows for each marker
        const infoWindow = new window.google.maps.InfoWindow({
          content: `<h3>${restaurant.name}</h3>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    };

    return () => {
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div>
      <h2>Map</h2>
      {/* Corrected the style prop */}
      <div id="map" style={{ width: '100%', height: '400px' }}>This is the Map</div>
    </div>
  );
};

export default Map;
