// Import modules
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

// Import components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Legal from '../Legal/Legal';
import NotFound from '../NotFound/NotFound';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Lists from '../Lists/Lists';
import CreateList from '../CreateList/CreateList';
import List from '../List/List';
import CreateItem from '../CreateItem/CreateItem';

// Import style
import './app.scss';

// Component
function App() {

  return (

    <div className="app">

      <Header />

      <Container fluid>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/legal' exact element={<Legal />} />
          <Route path='/notfound' exact element={<NotFound />} />
          <Route path='/signin' exact element={<SignIn />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/lists' exact element={<Lists />} />
          <Route path='/lists/createlist' exact element={<CreateList />} />
          <Route path='/list/:id' exact element={<List />} />
          <Route path='/list/:id/createitem' exact element={<CreateItem />} />
        </Routes>

      </Container>

      <Footer />

    </div>

  );
}

// Export
export default App;
