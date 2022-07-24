// Import packages/modules
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Import others
import { isUserAuthenticated, authenticateUser } from '../../utils/auth';

// Import components
import SignUpForm from './SignUpForm';
import AlertError from './AlertError';

// Import stylesheet
import './signup.scss';

// Component
const SignUp = () => {
  // States
  const [error, setError] = useState('');
  const [isAuth, setIsAuth] = useState(isUserAuthenticated());

  // API requests
  const subscription = (details) => {
    axios.post('https://onedream-onewish.herokuapp.com/user', {
      "pseudo": details.pseudo,
      "email": details.email,
      "password": details.password
    })
      .then((res) => {
        authenticateUser(res.data.token);
        setIsAuth(true);
      })
      .catch((err) => {
        setError(<AlertError />);
      });
  };

  // Redirection if connected
  if (isAuth) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="signup">
      <div className="row">
        <div className="col">
          <SignUpForm subscription={subscription} error={error} />
        </div>
      </div>
    </div>
  );
};

// Export component
export default SignUp;
