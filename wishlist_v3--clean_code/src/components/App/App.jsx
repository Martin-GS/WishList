// Import modules
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

// Import PrivateRoutes
import PrivateRoutes from '../../utils/PrivateRoutes';

// Import components
import Header from '../Header/Header';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Lists from '../Lists/Lists';
import CreateList from '../CreateList/CreateList';
import List from '../List/List';
import CreateItem from '../CreateItem/CreateItem';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Legal from '../Legal/Legal';

// Import style
import Container from 'react-bootstrap/Container';
import './app.scss';

// Component
function App() {

  const [isAuth, setIisAuth] = useState([]);

  const changeIsAuth = (value) => {
    setIisAuth(value);
  };

  return (

    <div className="app">

      <Header isAuth={isAuth} />

      <Container fluid>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='/signin' element={<SignIn changeIsAuth={changeIsAuth} />} />
          <Route path='/signup' element={<SignUp changeIsAuth={changeIsAuth} />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/lists' element={<Lists />} />
            <Route path='/lists/createlist' element={<CreateList />} />
            <Route path='/list/:id' element={<List />} />
            <Route path='/list/:id/createitem' element={<CreateItem />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Container>

      <Footer />

    </div>

  );
}

// Export
export default App;
