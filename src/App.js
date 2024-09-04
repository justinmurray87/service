// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CitySelector from './components/CitySelector';
import MainMenu from './components/MainMenu';
import TopRestaurants from './components/TopRestaurants';
import TopReviewers from './components/TopReviewers';
import FeaturedReviews from './components/FeaturedReviews';
import Map from './components/Map';
import SearchBar from './components/SearchBar';

// Hardcoded initial city and future city list (to be replaced by microservices later)
const defaultCity = 'San Francisco';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(defaultCity);

  return (
    <Router>
      <div className="app">
        {/* Main Menu */}
        <header className="main-header">
          <h1>Restaurant & Coffee Shop Reviews</h1>
          <MainMenu />
        </header>

        {/* City Selector */}
        <nav className="city-selector">
          <CitySelector selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        </nav>

        {/* Main Content */}
        <main>
          {/* Search Bar */}
          <section className="search-section">
            <SearchBar selectedCity={selectedCity} />
          </section>

          {/* Top Restaurants and Reviewers */}
          <section className="top-lists">
            <TopRestaurants selectedCity={selectedCity} />
            <TopReviewers selectedCity={selectedCity} />
          </section>

          {/* Featured Reviews */}
          <section className="featured-reviews">
            <FeaturedReviews selectedCity={selectedCity} />
          </section>

          {/* Map (hidden by default, but togglable in future updates) */}
          <section className="map-section">
            <Map selectedCity={selectedCity} />
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;
