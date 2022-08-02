import React from 'react';
// !!! TODO : REPLACE REDIRECT :
// import { Route, Redirect } from 'react-router-dom';

import { isUserAuthenticated } from './auth';

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => {
    if (isUserAuthenticated()) {
      return <Component {...props} />
    } else {
      // !!! TODO : REPLACE REDIRECT :
      return <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
    }
  }} />
};

export default ProtectedRoute;
