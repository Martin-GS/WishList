// Import packages/modules
import React from 'react';

// Import components
import Header from '../Header/Header';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';

// Import stylesheet
import './styles.scss';

// Component
const App = () => (

  <div className="app container">
    <Header />
    <Container />
    <Footer />
  </div>

);

// Export
export default App;
