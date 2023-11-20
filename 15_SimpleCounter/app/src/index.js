import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
