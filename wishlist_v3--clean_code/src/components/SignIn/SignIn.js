// Import modules
import React from 'react';

// Import components
import SignInForm from './SignInForm';
// import AlertError from './AlertError';

// Miscellaneous
import './signin.scss';

// Component
function SignIn() {

  return (

    <div className="signin">
      <div className="signin container">
        <div className="row">
          <div className="col">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>

  );

}

// Export
export default SignIn;
