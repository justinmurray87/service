// src/components/TopReviewers.js
import React from 'react';
import sampleData from '../data/sampleData';

const TopReviewers = ({ selectedCity }) => {
  const topReviewers = sampleData.reviewers.filter(
    (reviewer) => reviewer.city === selectedCity
  );

  return (
    <div>
      <h2>Top Reviewers in {selectedCity}</h2>
      <ul>
        {topReviewers.map((reviewer) => (
          <li key={reviewer.id}>{reviewer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopReviewers;
