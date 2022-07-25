// Import packages/modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

// Import stylesheet
import './signin.scss';

// Component
const SignInForm = ({ Login, error }) => {

  // State
  const [details, setDetails] = useState({ email: '', password: '' });

  // Handle submit
  const submitHandler = event => {
    event.preventDefault();
    Login(details);
  };

  return (

    <div className="signinform container">

      <div className="row mx-auto">
        <div className="col text-center">
          <h2>Se connecter</h2>
        </div>
      </div>

      <div className="row mx-auto">

        <div className="col d-none d-lg-block">
          &nbsp;
        </div>

        <div className="col col-lg-6">

          <Form className="form" onSubmit={submitHandler}>

            {(error !== '') ? (<div className="error">{error}</div>) : ''}

            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Label>Adresse eMail</Form.Label>
              <Form.Control
                className="input"
                type="email"
                name="email"
                placeholder="Adresse eMail"
                value={details.name}
                onChange={ (event) => setDetails({ ...details, email: event.target.value })}
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
                onChange={ (event) => setDetails({ ...details, password: event.target.value })}
              />
              <Form.Text className="text-muted">
                Écrivez votre mot de passe à l'abri des regards indiscrets, et ne le partagez jamais.
              </Form.Text>
            </Form.Group>

            <div className="row">
              <div className="col text-center">
                <Link to="/">
                  <Button className="btn btn-primarys text-white shadow my-4" variant="primary" type="button">
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

        <div className="col d-none d-lg-block">
          &nbsp;
        </div>

      </div>

    </div>

  );
};

// Export component
export default SignInForm;
