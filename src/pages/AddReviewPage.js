// src/pages/AddReviewPage.js
import React, { useState } from 'react';
import { generateReviewAI } from '../api/api';
import SearchBar from '../components/SearchBar';
import ReviewInputForm from '../components/ReviewInputForm';
import sampleData from '../data/sampleData'; // Import to update sample data

const AddReviewPage = () => {
  const [step, setStep] = useState(1);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [notes, setNotes] = useState('');
  const [images, setImages] = useState([]);
  const [generatedReview, setGeneratedReview] = useState('');
  const [finalReview, setFinalReview] = useState('');
  const [tone, setTone] = useState('conversational');
  const [isNewRestaurant, setIsNewRestaurant] = useState(false);

  // Handle restaurant selection or addition
  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsNewRestaurant(restaurant.isNew || false); // Flag if this is a new restaurant
    setStep(2); // Proceed to next step
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
      // Add the new restaurant to the sample data (or handle saving in a real database)
      sampleData.restaurants.push({
        id: sampleData.restaurants.length + 1,
        name: selectedRestaurant.name,
        city: selectedRestaurant.city,
        lat: selectedRestaurant.lat,
        lng: selectedRestaurant.lng,
        lastReviewedDate: new Date().toISOString().split('T')[0], // Today's date
        averageRating: 0, // Start with 0, or you can use some other logic
        category: 'eats',
        vibe: 'New',
        bestDish: 'TBD'
      });
      console.log('New restaurant added to data:', selectedRestaurant.name);
    }
  };

  return (
    <div className="add-review-page">
      {step === 1 && (
        <div className="step-1">
          <h2>Select a Restaurant</h2>
          {/* Reuse SearchBar and pass the callback to handle restaurant selection */}
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
        </div>
      )}
    </div>
  );
};

export default AddReviewPage;
