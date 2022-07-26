// Import modules
import React from 'react';

// Import components
import SignUpForm from './SignUpForm';
// import AlertError from './AlertError';

// Miscellaneous
import './signup.scss';

// Component
function SignUp() {

  return (

    <div className="signup">

      <div className="signup">
        <div className="row">
          <div className="col">
            <SignUpForm />
          </div>
        </div>
      </div>

    </div>

  );

}

// Export
export default SignUp;
