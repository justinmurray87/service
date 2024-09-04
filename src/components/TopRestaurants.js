// src/components/TopRestaurants.js
import React from 'react';
import sampleData from '../data/sampleData';

const TopRestaurants = ({ selectedCity }) => {
  const topRestaurants = sampleData.restaurants.filter(
    (restaurant) => restaurant.city === selectedCity
  );

  return (
    <div>
      <h2>Top Restaurants in {selectedCity}</h2>
      <ul>
        {topRestaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopRestaurants;
