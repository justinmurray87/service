import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated for Routes
import CitySelector from './components/CitySelector';
import MainMenu from './components/MainMenu';
import TopRestaurants from './components/TopRestaurants';
import TopReviewers from './components/TopReviewers';
import FeaturedReviews from './components/FeaturedReviews';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import ReadReviewsPage from './pages/ReadReviewsPage';
import AddReviewPage from './pages/AddReviewPage';

const defaultCity = 'San Francisco'; // Initial hardcoded city

const App = () => {
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [isMapVisible, setIsMapVisible] = useState(false); // State for toggling map visibility

  // Toggle function to show/hide the map
  const toggleMapVisibility = () => {
    setIsMapVisible(!isMapVisible);
  };

  return (
    <Router> {/* This is the Router wrapping the entire app */}
      <div className="app">
        <header className="main-header">
          <h1>Restaurant & Coffee Shop Reviews</h1>
          <MainMenu /> {/* Links for navigating */}
        </header>

        <nav className="city-selector">
          <CitySelector selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        </nav>

        {/* Main Content */}
        <main>
          <Routes> {/* Updated Switch to Routes */}
            {/* Route for the Read Reviews Page */}
            <Route path="/reviews" element={<ReadReviewsPage />} />

            {/* Route for the Add Review Page */}
            <Route path="/add-review" element={<AddReviewPage />} />

            {/* Default Route (Home page) */}
            <Route path="/" element={
              <>
                <section className="search-section">
                  <SearchBar selectedCity={selectedCity} />
                </section>

                <section className="map-toggle">
                  <button onClick={toggleMapVisibility}>
                    {isMapVisible ? 'Hide Map' : 'Show Map'}
                  </button>
                </section>

                {isMapVisible && (
                    <Map selectedCity={selectedCity} />
                )}

                <section className="top-lists">
                  <TopRestaurants selectedCity={selectedCity} />
                  <TopReviewers selectedCity={selectedCity} />
                </section>

                <section className="featured-reviews">
                  <FeaturedReviews selectedCity={selectedCity} />
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
