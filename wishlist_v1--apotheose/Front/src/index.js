import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'src/components/App';

const rootReactElement = (
  <Router>
    <App />
  </Router>
);

const target = document.getElementById('root');

render(rootReactElement, target);
