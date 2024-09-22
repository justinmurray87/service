// src/pages/Studio.js
import React from 'react';
import MainMenu from '../components/MainMenu';
import AddReview from '../components/AddReview';

const Studio = () => {
  return (
    <div className="studio-page">
      {/* Main menu header */}
      <MainMenu />

      <main>
        <h1>Welcome to the Studio</h1>
        <AddReview />
      </main>
    </div>
  );
};

export default Studio;

