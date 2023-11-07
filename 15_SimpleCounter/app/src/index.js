import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App'; // Assuming App.jsx is renamed from App.js and is in the same directory
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the app using the new root API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
