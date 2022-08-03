// Import modules
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

// Import components
import AlertError from './AlertError';

// Import auth
import { isUserAuthenticated, authenticateUser } from '../../utils/auth';

// Import style
import { Form, Button } from 'react-bootstrap';
import './signup.scss';

// Component
function SignUp() {

  // States
  const [isAuth, setIsAuth] = useState(isUserAuthenticated());
  const [details, setDetails] = useState({ pseudo: '', email: '', password: '' });
  const [error, setError] = useState('');

  // API requests
  const subscription = (details) => {
    axios.post('https://onedream-onewish.herokuapp.com/user', {
      "pseudo": details.pseudo,
      "email": details.email,
      "password": details.password
    })
      .then((res) => {
        authenticateUser(res.data.token);
        setIsAuth(true);
      })
      .catch((err) => {
        setError(<AlertError />);
      });
  };

  // Redirection if connected
  if (isAuth) {
    return <Navigate replace to="/lists" />
  }

  // Handle submit
  const submitHandler = (event) => {
    event.preventDefault();
    subscription(details);
  };

  return (

    <div className="signup">

      <div className="row mx-auto">
        <div className="col text-center">
          <h2>S'inscrire</h2>
        </div>
      </div>

      <div className="row mx-auto">

        {/* Phantom left div : center form in large screen */}
        <div className="col d-none d-lg-block">
          &nbsp;
        </div>

        <div className="col col-lg-6">

          <Form className="form" onSubmit={submitHandler}>

            {(error !== '') ? (<div className="error">{error}</div>) : ''}

            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Label>Nom d'utilisateur</Form.Label>
              <Form.Control
                className="input"
                type="text"
                name="pseudo"
                placeholder="Nom d'utilisateur"
                value={details.name}
                onChange={(event) => setDetails({ ...details, pseudo: event.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Label>Adresse eMail</Form.Label>
              <Form.Control
                className="input"
                type="email"
                name="email"
                placeholder="Adresse eMail"
                value={details.name}
                onChange={(event) => setDetails({ ...details, email: event.target.value })}
              />
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                className="input"
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={details.password}
                onChange={(event) => setDetails({ ...details, password: event.target.value })}
              />
            </Form.Group>

            <div className="row">

              <div className="col text-center">
                <Link to="/">
                  <Button className="btn btn-secondary text-white shadow-sm my-4" type="button">
                    Annuler
                  </Button>
                </Link>
              </div>

              <div className="col text-center">
                <Button className="btn btn-primary text-white shadow my-4" variant="primary" type="submit">
                  Valider
                </Button>
              </div>

            </div>

          </Form>

        </div>

        {/* Phantom right div : center form in large screen */}
        <div className="col d-none d-lg-block">
          &nbsp;
        </div>

      </div>

    </div>

  );

}

// Export
export default SignUp;
