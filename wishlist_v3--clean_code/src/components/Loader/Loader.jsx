import React from 'react';

import './loader.scss';
import insigne from '../../assets/images/logo.png';

const Loader = () => (
  <div className="row">
    <div className="col">
      <img className="loader" src={insigne} alt="" width="120" height="120" />
    </div>
  </div>
);

export default Loader;