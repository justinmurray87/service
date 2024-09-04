// src/components/MainMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/top-reviews">Top Reviews</Link></li>
        <li><Link to="/top-reviewers">Top Reviewers</Link></li>
        <li><Link to="/top-staff">Top Staff</Link></li>
        <li><Link to="/contribute">Contribute</Link></li>
      </ul>
    </nav>
  );
};

export default MainMenu;
