import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// TRAP REMOVED.
// We no longer register the Service Worker.
// The browser is now free to talk to the network.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);