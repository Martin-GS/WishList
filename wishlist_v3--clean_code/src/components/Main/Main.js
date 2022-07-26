// Import modules
import React from 'react';

// Import components
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Lists from '../Lists/Lists';
import CreateList from '../CreateList/CreateList';
import List from '../List/List';
import CreateItem from '../CreateItem/CreateItem';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Legal from '../Legal/Legal';
import NotFound from '../NotFound/NotFound';

// Miscellaneous
import './main.scss';

// Component
function Main() {
  return (

    <div className="main">
      <Home />
      <SignIn />
      <SignUp />
      <Lists />
      <CreateList />
      <List />
      <CreateItem />
      <Contact />
      <About />
      <Legal />
      <NotFound />
    </div>
  );
}

// Export
export default Main;
