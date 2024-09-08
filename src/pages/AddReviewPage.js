// src/pages/AddReviewPage.js
import React, { useState } from 'react';
import { generateReviewAI } from '../api/api'; // Correct the import

const AddReviewPage = () => {
  const [step, setStep] = useState(1);
  const [notes, setNotes] = useState('');
  const [images, setImages] = useState([]);
  const [generatedReview, setGeneratedReview] = useState('');
  const [finalReview, setFinalReview] = useState('');
  const [tone, setTone] = useState('conversational');

  const handleNextStep = async () => {
    if (step === 1) {
      const review = await generateReviewAI({ notes, images, tone });
      setGeneratedReview(review);
      setFinalReview(review);
      setStep(2);
    }
  };

  const handlePublish = () => {
    console.log('Publishing review:', finalReview);
  };

  return (
    <div className="add-review-page">
      {step === 1 && (
        <div className="step-1">
          <h2>Add Notes & Pictures</h2>
          <label>
            Notes (Bullet points):
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter your thoughts, e.g., Service was great, but food was too salty."
            />
          </label>
          <label>
            Upload Pictures:
            <input type="file" multiple onChange={(e) => setImages([...e.target.files])} />
          </label>
          <label>
            Tone:
            <select value={tone} onChange={(e) => setTone(e.target.value)}>
              <option value="conversational">Conversational</option>
              <option value="professional">Professional</option>
              <option value="humorous">Humorous</option>
            </select>
          </label>
          <button onClick={handleNextStep}>Generate Review</button>
        </div>
      )}

      {step === 2 && (
        <div className="step-2">
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
