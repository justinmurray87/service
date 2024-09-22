// src/components/ReviewInputForm.js
import React from 'react';

const ReviewInputForm = ({ notes, setNotes, images, setImages, tone, setTone, onNext }) => {
  return (
    <div>
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
      <button onClick={onNext}>Generate Review</button>
    </div>
  );
};

export default ReviewInputForm;
