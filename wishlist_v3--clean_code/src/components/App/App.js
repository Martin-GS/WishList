// Import modules
import React from 'react';

// Import components
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

// Miscellaneous
import './app.css';
// import logo from '../../assets/images/logo.png';

// Component
function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// Export
export default App;
