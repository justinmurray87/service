// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Map from './components/Map';
import ReadReviewsPage from './pages/ReadReviewsPage';
import AddReviewPage from './pages/AddReviewPage';
import TopRestaurants from './components/TopRestaurants';
import TopReviewers from './components/TopReviewers';
import FeaturedReviews from './components/FeaturedReviews';
import Studio from './pages/Studio';
import data from './data/sampleData';

const defaultCity = 'San Francisco'; // Initial hardcoded city

const App = () => {
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [isMapVisible, setIsMapVisible] = useState(true); // State for toggling map visibility

  // Toggle function to show/hide the map
  const toggleMapVisibility = () => {
    setIsMapVisible(!isMapVisible);
  };

  // Filter reviews based on the selected city
  const filteredReviews = data.reviews.filter((review) => review.city === selectedCity);

  return (
    <Router>
      <div className="app">
        {/* MainMenu handles the header, search, and city selector */}
        <MainMenu selectedCity={selectedCity} setSelectedCity={setSelectedCity} />

        <main>
          <Routes>
            <Route path="/reviews" element={<ReadReviewsPage />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/" element={
              <>
                {isMapVisible && (
                  <section className="map-section">
                    <Map selectedCity={selectedCity} />
                  </section>
                )}

                <section className="map-toggle">
                  <button onClick={toggleMapVisibility}>
                    {isMapVisible ? 'Hide Map' : 'Show Map'}
                  </button>
                </section>

                <section className="top-lists">
                  <TopRestaurants selectedCity={selectedCity} />
                  <TopReviewers selectedCity={selectedCity} />
                </section>

                <section className="featured-reviews">
                  <FeaturedReviews reviews={filteredReviews} />
                </section>
              </>
            } exact />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
