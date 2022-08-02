import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import { isUserAuthenticated } from './auth';

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => {
    if (isUserAuthenticated()) {
      return <Component {...props} />
    } else {
      return <Navigate replace to="/signin" />
    }
  }} />
};

export default ProtectedRoute;
