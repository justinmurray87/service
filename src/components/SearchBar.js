import React, { useState } from 'react';
import axios from 'axios';
import googleApiConfig from '../config/googleApiConfig';
import sampleData from '../data/sampleData';

const SearchBar = ({ onSelectRestaurant }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Search in local data
      let filteredResults = sampleData.restaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(query.toLowerCase())
      );

      // If less than 10 results, query Google Places API
      if (filteredResults.length < 10) {
        const googleResults = await axios.get(
          `https://maps.googleapis.com/maps/api/place/textsearch/json`,
          {
            params: {
              query: query,
              key: googleApiConfig.apiKey,
            },
          }
        );

        // Combine the results and mark Google results as new
        filteredResults = [...filteredResults, ...googleResults.data.results.map(place => ({
          name: place.name,
          city: 'Unknown', // Since we don't know this until user adds it
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
          isNew: true, // Mark this as a new restaurant
          note: '(not yet reviewed)',
        }))];
      }

      setResults(filteredResults);
    } catch (error) {
      console.error('Error during search', error);
    }
  };

  const handleSelect = (restaurant) => {
    onSelectRestaurant(restaurant); // Call parent function to select the restaurant
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for restaurants..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result, index) => (
          <li key={index} onClick={() => handleSelect(result)}>
            {result.name} {result.note && <span>{result.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
