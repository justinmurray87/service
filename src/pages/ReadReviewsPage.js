// ReadReviewsPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Map from '../components/Map';
import FeaturedReviews from '../components/FeaturedReviews';
import data from '../data/sampleData'; // In the future, replace this with an API call

const ReadReviewsPage = () => {
  // Get city from the URL parameters
  const { city } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get the restaurantId from the query string
  const restaurantId = queryParams.get('restaurantId');

  // Initialize filter state
  const [filter, setFilter] = useState({
    cuisine: '',
    category: '',
    search: '',
    reviewer: '',
  });

  // Track the selected city from the URL or the filter input
  const [selectedCity, setSelectedCity] = useState(city || '');

  // State to hold the filtered reviews
  const [filteredReviews, setFilteredReviews] = useState([]);

  // Function to abstract filtering logic (in the future, this could be an API call)
  const getFilteredReviews = () => {
    console.log('Fetching filtered reviews...');

    // In the future, this could be an API call like:
    // axios.get(`/api/reviews?city=${selectedCity}&cuisine=${filter.cuisine}&category=${filter.category}`)

    return data.reviews.filter((review) => {
      const matchesRestaurant = restaurantId
        ? review.id && review.id.toString() === restaurantId
        : true;
      console.log(`Matches Restaurant ID (${restaurantId}):`, matchesRestaurant);
  
      const matchesCity = selectedCity ? review.city === selectedCity : true;
      console.log(`Matches City (${selectedCity}):`, matchesCity);
  
      const matchesCuisine = filter.cuisine ? review.cuisine === filter.cuisine : true;
      console.log(`Matches Cuisine (${filter.cuisine}):`, matchesCuisine);
  
      const matchesCategory = filter.category ? review.category === filter.category : true;
      console.log(`Matches Category (${filter.category}):`, matchesCategory);
  
      const matchesReviewer = filter.reviewer 
        ? review.reviewer?.toLowerCase().includes(filter.reviewer.toLowerCase()) 
        : true;
      console.log(`Matches Reviewer (${filter.reviewer}):`, matchesReviewer);
  
      const matchesSearch = filter.search
        ? review.title?.toLowerCase().includes(filter.search.toLowerCase()) ||
          review.content?.toLowerCase().includes(filter.search.toLowerCase())
        : true;
      console.log(`Matches Search (${filter.search}):`, matchesSearch);
  
      return matchesRestaurant && matchesCity && matchesCuisine && matchesCategory && matchesReviewer && matchesSearch;
    });
  };

  // Effect to update filtered reviews whenever filter state or URL params change
  useEffect(() => {
    const filtered = getFilteredReviews();
    setFilteredReviews(filtered);

    // Log the filtered reviews for debugging
    console.log('Filtered Reviews:', filtered.map((review) => review.id));
  }, [filter, selectedCity, restaurantId]); // Dependency array to trigger re-filtering

  // Prepare review locations for the map
  const reviewLocations = filteredReviews.map((review) => ({
    lat: review.location?.lat,
    lng: review.location?.lng,
    title: review.restaurantName || 'Restaurant',
  }));

  return (
    <div className="read-reviews-page">
      <h2>Your Reviews</h2>

      {/* Interactive map showing review locations */}
      <Map locations={reviewLocations} />

      {/* Filter controls */}
      <div className="filters">
        <label>
          Cuisine:
          <select value={filter.cuisine} onChange={(e) => setFilter({ ...filter, cuisine: e.target.value })}>
            <option value="">All</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Mexican">Mexican</option>
            {/* Add more options as needed */}
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
          Reviewer:
          <input
            type="text"
            value={filter.reviewer}
            onChange={(e) => setFilter({ ...filter, reviewer: e.target.value })}
            placeholder="Reviewer name..."
          />
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
        <label>
          City:
          <input
            type="text"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            placeholder="City name..."
          />
        </label>
      </div>

      {/* List of filtered reviews */}
      <FeaturedReviews reviews={filteredReviews} />
    </div>
  );
};

export default ReadReviewsPage;
