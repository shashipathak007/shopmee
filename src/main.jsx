import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Failed to find the root element. Check if index.html has an id='root' div.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);