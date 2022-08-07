import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import SignUpConfirmation from './SignUpConfirmation';
import AlertError from '../AlertError/AlertError';
import Loader from '../Loader/Loader';
import { isUserAuthenticated, authenticateUser } from '../../utils/auth';

function SignUp() {

  const [isAuth, setIsAuth] = useState(isUserAuthenticated());
  const [details, setDetails] = useState({ pseudo: '', email: '', password: '' });
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const subscription = (details) => {
    setLoading(true);
    axios.post('https://onedream-onewish.herokuapp.com/user', {
      "pseudo": details.pseudo,
      "email": details.email,
      "password": details.password
    })
      .then((res) => {
        authenticateUser(res.data.token);
        showConfirmationModal();
      })
      .catch((err) => {
        setError(<AlertError />);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showConfirmationModal = () => {
    setDisplayConfirmationModal(true);
  };

  const submitConfirmationModal = () => {
    setDisplayConfirmationModal(false);
    setIsAuth(true);
  };

  if (isAuth) {
    return <Navigate replace to="/lists" />
  }

  const submitHandler = (event) => {
    event.preventDefault();
    subscription(details);
  };

  return (

    <div className="signup">

      {loading && <Loader />}

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

            <div className="col text-center">
              <Form.Text className="text-center">
                * Champs obligatoires
              </Form.Text>
            </div>

            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Label>Nom d'utilisateur *</Form.Label>
              <Form.Control
                className="input"
                type="text"
                name="pseudo"
                placeholder="Nom d'utilisateur"
                value={details.name}
                onChange={(event) => setDetails({ ...details, pseudo: event.target.value })}
              />
              <Form.Text className="text-muted">
                Le nom d'utilisateur est un nom unique que seul vous possédez.
              </Form.Text>
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Label>Adresse eMail *</Form.Label>
              <Form.Control
                className="input"
                type="email"
                name="email"
                placeholder="Adresse eMail"
                value={details.name}
                onChange={(event) => setDetails({ ...details, email: event.target.value })}
              />
              <Form.Text className="text-muted">
                Vos données sont notre priorité et restent privées.
              </Form.Text>
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicPassword">
              <Form.Label>Mot de passe *</Form.Label>
              <Form.Control
                className="input"
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={details.password}
                onChange={(event) => setDetails({ ...details, password: event.target.value })}
              />
              <Form.Text className="text-muted">
                Écrivez votre mot de passe à l'abri des regards indiscrets et ne le partagez jamais.
              </Form.Text>
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
                <Button
                  className="btn btn-primary text-white shadow my-4"
                  variant="primary"
                  type="submit"
                // onClick={() => showConfirmationModal()}
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

      <SignUpConfirmation
        displayModal={displayConfirmationModal}
        submitConfirmation={submitConfirmationModal}
      />

    </div>

  );

}

// Export
export default SignUp;