// Import packages/modules
import React from 'react';
import { Form, Button } from 'react-bootstrap';

// Import stylesheet
import './signup.scss';

// Component
const SignUpForm = () => {

  return (

    <div className="signupform">

      <div className="row">
        <div className="col text-center">
          <h2>S'inscrire</h2>
        </div>
      </div>

      <div className="row mx-auto">

        <div className="col d-none d-lg-block">&nbsp;</div>

        <div className="col col-lg-6">

          <Form className="form">

            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Label>Nom d'utilisateur</Form.Label>
              <Form.Control
                className="input"
                type="text"
                name="pseudo"
                placeholder="Nom d'utilisateur"
              />
              <Form.Text className="text-muted">
                Un nom unique que seul vous possédez.
              </Form.Text>
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Label>Adresse eMail</Form.Label>
              <Form.Control
                className="input"
                type="email"
                name="email"
                placeholder="Adresse eMail"
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
              />
              <Form.Text className="text-muted">
                Écrivez-le à l'abri des regards et ne le partagez jamais.
              </Form.Text>
            </Form.Group>

            <div className="row">
              <div className="col text-center">
                <Button className=" btn-primary text-white shadow my-4" variant="primary" type="button">
                  Annuler
                </Button>
              </div>
              <div className="col text-center">
                {/* <Button className="btn btn-primary text-white shadow my-4" variant="primary" type="submit"> */}
                <Button className="btn btn-primary text-white shadow my-4" variant="primary" type="button">
                  Valider
                </Button>
              </div>
            </div>

          </Form>

        </div>

        <div className="col d-none d-lg-block">&nbsp;</div>

      </div>

    </div>

  );
};

// Export component
export default SignUpForm;
