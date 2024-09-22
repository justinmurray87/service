// src/components/TopRestaurants.js
import React from 'react';
import { Link } from 'react-router-dom';
import sampleData from '../data/sampleData';

const TopRestaurants = ({ selectedCity }) => {
  const currentDate = new Date();

  // Filter restaurants by selectedCity and the ones that have been reviewed in the last 6 months
  const topRestaurants = sampleData.restaurants
    .filter((restaurant) => {
      const reviewDate = new Date(restaurant.lastReviewedDate);
      const timeDiff = Math.abs(currentDate - reviewDate); // Time difference in milliseconds
      const diffInDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days
      return restaurant.city === selectedCity && diffInDays <= 180; // Only show restaurants reviewed in the last 6 months
    })
    .sort((a, b) => b.averageRating - a.averageRating) // Sort by rating (highest first)
    .slice(0, 3); // Limit to top 3 restaurants

  return (
    <div>
      <h2>Top Eats in {selectedCity}</h2>
      {topRestaurants.length > 0 ? (
        <ol>
          {topRestaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Link to={`/reviews?restaurantId=${restaurant.id}`}>
                {restaurant.name} - Rating: {restaurant.averageRating}
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p>No Eats rated here in the past 6 months in {selectedCity}. Leave a review here.</p>
      )}
    </div>
  );
};

export default TopRestaurants;
