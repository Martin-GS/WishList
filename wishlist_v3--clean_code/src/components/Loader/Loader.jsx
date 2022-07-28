// Import modules
import React from 'react';

// Import style
import './loader.scss';

// Import images
import insigne from '../../assets/images/logo.png';

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
