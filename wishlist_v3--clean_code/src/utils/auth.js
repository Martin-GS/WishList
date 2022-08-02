// Crée le token
export const authenticateUser = (token) => {
  localStorage.setItem('token', token);
};

// Récupère le token
export const getToken = () => {
  return localStorage.getItem('token');
};

// Vérifie s'il y a un token
export const isUserAuthenticated = () => {
  return localStorage.getItem('token') !== null
};

// Supprime le token
export const deAuthenticateUser = () => {
  localStorage.removeItem('token');
};
