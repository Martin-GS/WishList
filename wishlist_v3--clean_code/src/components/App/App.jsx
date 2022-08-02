// Import modules
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import ProtectedRoute
import ProtectedRoute from '../../utils/ProtectedRoute';

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

  return (

    <div className="app">

      <Header />

      <Container fluid>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />

          {/* <Route path='/lists' element={<Lists />} /> */}
          <ProtectedRoute component={Lists} path="/lists" exact />

          {/* <Route path='/lists/createlist' element={<CreateList />} /> */}
          <ProtectedRoute component={CreateList} path="/lists/createlist" exact />

          {/* <Route path='/list/:id' element={<List />} /> */}
          <ProtectedRoute component={List} path="/list/:id" exact />

          {/* <Route path='/list/:id/createitem' element={<CreateItem />} /> */}
          <ProtectedRoute component={CreateItem} path="/list/:id/createitem" exact />

          <Route path="*" element={<NotFound />} />
        </Routes>

      </Container>

      <Footer />

    </div>

  );
}

// Export
export default App;
