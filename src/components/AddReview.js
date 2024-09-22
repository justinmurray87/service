// src/components/AddReview.js
import React, { useState } from 'react';
import { generateReviewAI } from '../api/api';
import SearchBar from '../components/SearchBar';
import ReviewInputForm from '../components/ReviewInputForm';
import sampleData from '../data/sampleData';

const AddReview = () => {
  const [step, setStep] = useState(1);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [notes, setNotes] = useState('');
  const [images, setImages] = useState([]);
  const [generatedReview, setGeneratedReview] = useState('');
  const [finalReview, setFinalReview] = useState('');
  const [tone, setTone] = useState('conversational');
  const [isNewRestaurant, setIsNewRestaurant] = useState(false);

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsNewRestaurant(restaurant.isNew || false);
    setStep(2);
  };

  const handleNextStep = async () => {
    if (step === 2) {
      const review = await generateReviewAI({ notes, images, tone });
      setGeneratedReview(review);
      setFinalReview(review);
      setStep(3);
    }
  };

  const handlePublish = () => {
    console.log('Publishing review for:', selectedRestaurant.name, finalReview);
    if (isNewRestaurant) {
      sampleData.restaurants.push({
        id: sampleData.restaurants.length + 1,
        name: selectedRestaurant.name,
        city: selectedRestaurant.city,
        lat: selectedRestaurant.lat,
        lng: selectedRestaurant.lng,
        lastReviewedDate: new Date().toISOString().split('T')[0],
        averageRating: 0,
        category: 'eats',
        vibe: 'New',
        bestDish: 'TBD',
      });
      console.log('New restaurant added to data:', selectedRestaurant.name);
    }

    // Add sharing options here (Instagram, Twitter, etc.)
    console.log('Sharing review to social media...');
  };

  const handleSave = () => {
    console.log('Review saved for later:', finalReview);
    // Logic to save the review (could be to local storage, database, etc.)
  };

  return (
    <div className="add-review-component">
      {step === 1 && (
        <div className="step-1">
          <h2>Select a Restaurant</h2>
          <SearchBar onSelectRestaurant={handleSelectRestaurant} />
        </div>
      )}

      {step === 2 && (
        <ReviewInputForm
          notes={notes}
          setNotes={setNotes}
          images={images}
          setImages={setImages}
          tone={tone}
          setTone={setTone}
          onNext={handleNextStep}
        />
      )}

      {step === 3 && (
        <div className="step-3">
          <h2>Review Generated Content</h2>
          <textarea
            value={finalReview}
            onChange={(e) => setFinalReview(e.target.value)}
          />
          <button onClick={handlePublish}>Publish Review</button>
          <button onClick={handleSave}>Save for Later</button>
        </div>
      )}
    </div>
  );
};

export default AddReview;

