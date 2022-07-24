// Import packages/modules
import React from 'react';

// Import stylesheet
import './profile.scss';

// Component
const UserCard = ({ dataUser }) => (

  <div className="UserCard">

    <div className="col-10 col-md-8 col-lg-6 mx-auto">
      <div className="card shadow">
        <div className="card-header text-center">
          <h5>{dataUser.pseudo}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">
            <h6>{dataUser.email}</h6>
          </li>
        </ul>
      </div>
    </div>

  </div>

);

// Export component
export default UserCard;
