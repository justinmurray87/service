// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';  // Ensure correct file path
import App from './App';

// Remove this line if you don’t have serviceWorker.js
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Uncomment this for offline capabilities
// serviceWorker.register(); // Also remove this line if serviceWorker is not used
