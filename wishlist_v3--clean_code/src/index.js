// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

// Root API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Web vitals.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
