// Import modules
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

// Import components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Legal from '../Legal/Legal';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Lists from '../Lists/Lists';
import CreateList from '../CreateList/CreateList';
import List from '../List/List';
import CreateItem from '../CreateItem/CreateItem';
import NotFound from '../NotFound/NotFound';

// Import style
import Container from 'react-bootstrap/Container';
import './app.scss';

// Component
function App() {

  const [inputMail, setInputMail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const onLoginInputChange = (value) => {
    setInputMail(value);
  };

  const onLoginFormSubmit = (event) => {
    event.preventDefault();
    // console.log("event.target[0].name", event.target[0].name);
    // console.log("event.target[0].value", event.target[0].value);
  }

  return (

    <div className="app">

      <Header />

      <Container fluid>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/legal' element={<Legal />} />

          <Route
            path='/signin'
            element={
              <SignIn
              inputMail={inputMail}
              inputPassword={inputPassword}
              onLoginInputChange={onLoginInputChange}
              onLoginFormSubmit={onLoginFormSubmit}
              />
            }
          />

          <Route path='/signup' element={<SignUp />} />
          <Route path='/lists' element={<Lists />} />
          <Route path='/lists/createlist' element={<CreateList />} />
          <Route path='/list/:id' element={<List />} />
          <Route path='/list/:id/createitem' element={<CreateItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Container>

      <Footer />

    </div>

  );
}

// Export
export default App;
