import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'

import { isUserAuthenticated } from './auth';

const PrivateRoutes = () => {
  if (isUserAuthenticated()) {
    return <Outlet />
  } else {
    return <Navigate to="/signin" replace />
  }
};

export default PrivateRoutes;