// MainMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CitySelector from './CitySelector';
import SearchBar from './SearchBar';

const MainMenu = ({ selectedCity, setSelectedCity }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-left">
        <h1 className="site-name">SERVICE</h1>
      </div>

      <div className="header-right">
        {/* Search Bar and City Selector */}
        {/* <SearchBar selectedCity={selectedCity} /> */}
        <CitySelector selectedCity={selectedCity} setSelectedCity={setSelectedCity} />

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`menu-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reviews">Explore</Link></li>
            <li><Link to="/studio">Studio</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainMenu;

