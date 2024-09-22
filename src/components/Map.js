import React, { useEffect } from 'react';
import sampleData from '../data/sampleData'; // Import the sample data for restaurants
import cities from '../data/cities'; // Import cities for center location

const Map = ({ selectedCity }) => {
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
      // Ensure selectedCity is being passed correctly
      console.log("Selected City on Init Map:", selectedCity);

      // Convert selectedCity and city names to lowercase to avoid case-sensitive mismatches
      const city = cities.find(
        (city) => city.name.toLowerCase() === selectedCity.toLowerCase()
      );

      // Check if the city exists before proceeding
      if (!city || !city.lat || !city.lng) {
        console.error("City not found or missing coordinates");
        return;
      }

      // Initialize the map centered around the selected city's coordinates
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: city.lat, lng: city.lng },
        zoom: 12,
      });

      // Filter restaurants by selected city
      const cityRestaurants = sampleData.restaurants.filter(
        (restaurant) => restaurant.city.toLowerCase() === selectedCity.toLowerCase()
      );

      // Loop through the restaurants and place markers
      cityRestaurants.forEach((restaurant) => {
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

    // Cleanup function to remove markers and reset map instance
    return () => {
      if (window._mapInstance) {
        window._mapInstance.markers.forEach((marker) => marker.setMap(null)); // Remove all markers
        window._mapInstance.map = null; // Reset map instance
        window._mapInstance.markers = [];
        delete window._mapInstance;
      }
    };
  }, [selectedCity]); // Dependency on selectedCity to update map when city changes

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '300px' }}>This is the Map</div>
    </div>
  );
};

export default Map;
