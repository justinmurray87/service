// src/components/FeaturedReviews.js
import React from 'react';
import sampleData from '../data/sampleData';

const FeaturedReviews = ({ reviews }) => {
  return (
    <div className="featured-reviews">
      {reviews.map((review) => (
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

