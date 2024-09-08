// ReadReviewsPage.js
import React, { useState, useEffect } from 'react';
import Map from '../components/Map';
import ReviewList from '../components/ReviewList';
import data from '../data/sampleData';

const ReadReviewsPage = () => {
  const [filter, setFilter] = useState({
    cuisine: '',
    category: '',
    search: '',
  });

  const filteredReviews = data.reviews.filter((review) => {
    const matchesCuisine = filter.cuisine ? review.cuisine === filter.cuisine : true;
    const matchesCategory = filter.category ? review.category === filter.category : true;
    const matchesSearch = filter.search
      ? review.title.toLowerCase().includes(filter.search.toLowerCase()) ||
        review.content.toLowerCase().includes(filter.search.toLowerCase())
      : true;
    return matchesCuisine && matchesCategory && matchesSearch;
  });

  const reviewLocations = filteredReviews.map((review) => ({
    lat: review.location?.lat,
    lng: review.location?.lng,
    title: review.restaurantName || "Restaurant",
  }));
  console.log("LOCATIONS>",reviewLocations)

  return (
    <div className="read-reviews-page">
      <h2>Your Reviews</h2>

      {/* Interactive map showing review locations */}
      <Map locations={reviewLocations}/>

      {/* Filter section */}
      <div className="filter-section">
        <label>
          Cuisine:
          <select value={filter.cuisine} onChange={(e) => setFilter({ ...filter, cuisine: e.target.value })}>
            <option value="">All</option>
            <option value="French">French</option>
            <option value="American">American</option>
          </select>
        </label>
        <label>
          Category:
          <select value={filter.category} onChange={(e) => setFilter({ ...filter, category: e.target.value })}>
            <option value="">All</option>
            <option value="Fast Casual">Fast Casual</option>
            <option value="Sit Down">Sit Down</option>
          </select>
        </label>
        <label>
          Search:
          <input
            type="text"
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
            placeholder="Search reviews..."
          />
        </label>
      </div>

      {/* List of filtered reviews */}
      <ReviewList reviews={filteredReviews} />
    </div>
  );
};

export default ReadReviewsPage;
