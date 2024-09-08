// ReviewList.js
import React from 'react';

const ReviewList = ({ reviews }) => {
  if (!reviews.length) {
    return <p>No reviews available.</p>;
  }

  return (
    <div className="review-list">
      {reviews.map((review) => (
        <div key={review.id} className="review-item">
          <h3>{review.title}</h3>
          <p>{review.content}</p>
          <p><strong>Restaurant:</strong> {review.restaurantName}</p>
          <p><strong>Cuisine:</strong> {review.cuisine}</p>
          <p><strong>Category:</strong> {review.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
