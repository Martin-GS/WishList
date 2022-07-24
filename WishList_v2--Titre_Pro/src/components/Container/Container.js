// Import packages/modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import others
import ProtectedRoute from '../../utils/ProtectedRoute';

// Import components
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Lists from '../Lists/Lists';
import CreateList from '../Lists/CreateList';
import List from '../List/List';
import CreateItem from '../List/CreateItem';
import Profile from '../Profile/Profile';
import UpdateProfile from '../Profile/UpdateProfile';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Legal from '../Legal/Legal';
import NotFound from '../NotFound/NotFound';

// Import stylesheet
import './container.scss';

// Components
const Container = () => (

  <div className="container">

    <Switch>

      <Route path="/" exact> <Home /> </Route>

      <Route path="/signin" exact> <SignIn /> </Route>

      <Route path="/signup" exact> <SignUp /> </Route>

      <ProtectedRoute component={Lists} path="/lists" exact />

      <ProtectedRoute component={CreateList} path="/lists/createlist" exact />

      <ProtectedRoute component={List} path="/list/:id" exact />

      <ProtectedRoute component={CreateItem} path="/list/:id/createitem" exact />

      <ProtectedRoute component={Profile} path="/profile" exact />

      <ProtectedRoute component={UpdateProfile} path="/user/update" exact />

      <Route path="/contact" exact> <Contact /> </Route>

      <Route path="/about" exact> <About /> </Route>

      <Route path="/legal" exact> <Legal /> </Route>

      <Route> <NotFound /> </Route>

    </Switch>

  </div>

);

// Export
export default Container;
