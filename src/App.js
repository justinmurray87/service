import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import these for routing
import CitySelector from './components/CitySelector';
import MainMenu from './components/MainMenu';
import TopRestaurants from './components/TopRestaurants';
import TopReviewers from './components/TopReviewers';
import FeaturedReviews from './components/FeaturedReviews';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import ReadReviewsPage from './pages/ReadReviewsPage'; // Make sure this is correctly imported
import AddReviewPage from './pages/AddReviewPage'; // Make sure this is correctly imported

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
          <Switch> {/* Switch will make sure only one route renders at a time */}
            {/* Route for the Read Reviews Page */}
            <Route path="/reviews" component={ReadReviewsPage} />

            {/* Route for the Add Review Page */}
            <Route path="/add-review" component={AddReviewPage} />

            {/* Default Route (Home page) */}
            <Route path="/" exact>
              <section className="search-section">
                <SearchBar selectedCity={selectedCity} />
              </section>

              <section className="map-toggle">
                <button onClick={toggleMapVisibility}>
                  {isMapVisible ? 'Hide Map' : 'Show Map'}
                </button>
              </section>

              {isMapVisible && (
                <section className="map-section">
                  <Map selectedCity={selectedCity} />
                </section>
              )}

              <section className="top-lists">
                <TopRestaurants selectedCity={selectedCity} />
                <TopReviewers selectedCity={selectedCity} />
              </section>

              <section className="featured-reviews">
                <FeaturedReviews selectedCity={selectedCity} />
              </section>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
