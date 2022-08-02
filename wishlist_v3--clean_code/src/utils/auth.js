// Set token
export const authenticateUser = (token) => {
  localStorage.setItem('token', token);
};

// Get token
export const getToken = () => {
  return localStorage.getItem('token');
};

// Remove token
export const deAuthenticateUser = () => {
  localStorage.removeItem('token');
};

// Is user authenticated ?
export const isUserAuthenticated = () => {
  return localStorage.getItem('token') !== null
};
