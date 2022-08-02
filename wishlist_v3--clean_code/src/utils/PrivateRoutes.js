// Import modules
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'

// Import auth
import { isUserAuthenticated } from './auth';

const PrivateRoutes = () => {

  if (isUserAuthenticated()) {
    return <Outlet />
  } else {
    return <Navigate to="/signin" replace />
  }

};

// Export
export default PrivateRoutes;
