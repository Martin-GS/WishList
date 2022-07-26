// Import modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Import components
import App from './components/App/App';

// Miscellaneous
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

// Root API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Web vitals.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
