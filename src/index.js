// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';  // Ensure correct file path
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
