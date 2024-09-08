// MainMenu.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const MainMenu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reviews">Read Reviews</Link> {/* Link to Read Reviews Page */}
        </li>
        <li>
          <Link to="/add-review">Add Review</Link> {/* Link to Add Review Page */}
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
