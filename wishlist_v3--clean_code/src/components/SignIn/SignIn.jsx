import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { isUserAuthenticated, authenticateUser } from '../../utils/auth';
import AlertError from '../AlertError/AlertError';
import Loader from '../Loader/Loader';

function SignIn({ replaceValueIfAuth }) {

  const [details, setDetails] = useState({ email: '', password: '' });
  const [isAuth, setIsAuth] = useState(isUserAuthenticated());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const Login = (details) => {

    setLoading(true);
    setError(false);

    axios.post('https://onedream-onewish.herokuapp.com/login', {
      "email": details.email,
      "password": details.password,
    })
      .then((response) => {
        authenticateUser(response.data.token);
        setIsAuth(true);
        replaceValueIfAuth(true);
      })
      .catch((err) => {
        setError(<AlertError />);
      })
      .finally(() => {
        setLoading(false);
      });

  };

  const submitHandler = event => {
    event.preventDefault();
    Login(details);
  };

  if (isAuth) {
    return <Navigate replace to="/lists" />
  }

  return (

    <div className="signin">

      {loading && <Loader />}

      <div className="row mx-auto">
        <div className="col text-center">
          <h2>Se connecter</h2>
        </div>
      </div>

      <div className="row mx-auto">


        {/* Phantom left div : center form in large screen */}
        <div className="col d-none d-lg-block">
          &nbsp;
        </div>

        <div className="col col-lg-6">

          <Form onSubmit={submitHandler}>

            {
              (error !== '') ? (<div className="error">{error}</div>) : ''
            }

            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Label>Adresse eMail</Form.Label>
              <Form.Control
                className="input"
                type="text"
                name="email"
                placeholder="email"
                value={details.name}
                onChange={(event) => setDetails(
                  { ...details, email: event.target.value }
                )}
              />
              <Form.Text className="text-muted">
                Vos données sont notre priorité et restent privées.
              </Form.Text>
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                className="input"
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={details.password}
                onChange={(event) => setDetails(
                  { ...details, password: event.target.value }
                )}
              />
              <Form.Text className="text-muted">
                Écrivez votre mot de passe à l'abri des regards indiscrets et ne le partagez jamais.
              </Form.Text>
            </Form.Group>

            <div className="row">

              <div className="col text-center">
                <Link to="/">
                  <Button
                    type="button"
                    className="btn btn-secondary text-white shadow-sm my-4"
                  >
                    Annuler
                  </Button>
                </Link>
              </div>

              <div className="col text-center">
                <Button
                  name="submit"
                  type='submit'
                  className="btn btn-primary text-white shadow my-4"
                  variant="primary"
                >
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

export default SignIn;