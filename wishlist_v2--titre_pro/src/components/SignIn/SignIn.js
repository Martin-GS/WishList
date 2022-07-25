// Import packages/modules
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Import others
import { isUserAuthenticated, authenticateUser } from '../../utils/auth';

// Import components
import SignInForm from './SignInForm';
import AlertError from './AlertError';

// Import stylesheet
import './signin.scss';

// Component
const SignIn = () => {
  // State
  const [error, setError] = useState('');
  const [isAuth, setIsAuth] = useState(isUserAuthenticated());

  // API requests
  const Login = (details) => {
    axios.post('https://onedream-onewish.herokuapp.com/login', {
      "email": details.email,
      "password": details.password,
    })
      .then((response) => {
        authenticateUser(response.data.token);
        setIsAuth(true);
      })
      .catch((error) => {
        setError(<AlertError />);
      });
  };

  if (isAuth) {
    return <Redirect to="/lists" />;
  }

  return (
    <div className="signin container">
      <div className="row">
        <div className="col">
          <SignInForm Login={Login} error={error} />
        </div>
      </div>
    </div>
  );
};

// Export component
export default SignIn;
