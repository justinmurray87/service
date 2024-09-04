import React, { useState } from 'react';
import axios from 'axios';
import googleApiConfig from '../config/googleApiConfig';
import sampleData from '../data/sampleData';

const SearchBar = ({ selectedCity }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Search in local data
      let filteredResults = sampleData.restaurants.filter(
        (restaurant) =>
          restaurant.city === selectedCity && restaurant.name.toLowerCase().includes(query.toLowerCase())
      );

      // If less than 10 results, query Google Places API
      if (filteredResults.length < 10) {
        const googleResults = await axios.get(
          `https://maps.googleapis.com/maps/api/place/textsearch/json`,
          {
            params: {
              query: `${query} in ${selectedCity}`,
              key: googleApiConfig.apiKey,
            },
          }
        );

        // Combine the results and add (not yet reviewed) note for Google results
        filteredResults = [...filteredResults, ...googleResults.data.results.map(place => ({
          name: place.name,
          city: selectedCity,
          note: '(not yet reviewed)',
        }))];
      }

      setResults(filteredResults);
    } catch (error) {
      console.error('Error during search', error);
    }
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
          <li key={index}>
            {result.name} {result.note && <span>{result.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
