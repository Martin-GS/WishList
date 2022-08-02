// Import modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './utils/reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

// Import components
import App from './components/App/App';

// Import style
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

// Web vitals
reportWebVitals();
