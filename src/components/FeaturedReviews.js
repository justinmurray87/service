// src/components/FeaturedReviews.js
import React from 'react';
import sampleData from '../data/sampleData';

const FeaturedReviews = ({ selectedCity }) => {
  const featuredReviews = sampleData.reviews.filter(
    (review) => review.city === selectedCity
  );

  return (
    <div className="featured-reviews">
      {featuredReviews.map((review) => (
        <div key={review.id} className="review-item">
          <img src={review.image} alt={review.title} />
          <h3>{review.title}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedReviews;
