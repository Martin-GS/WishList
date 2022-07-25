// Import packages/modules
import React from 'react';

// Import stylesheet
import './loader.scss';

// Import image
import insigne from '../../assets/images/wishlist-insigne.svg';

// Component
const Loader = () => (
  <div className="row">
    <div className="col">
      <img className="loader" src={insigne} alt="" width="120" height="120" />
    </div>
  </div>
);

// Export component
export default Loader;
