// Import modules
import React from 'react';
import { useNavigate } from "react-router-dom";

// Import components

// Miscellaneous
import './contact.scss';
import { Form, Button, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';

// Component
function Contact() {

  const goback = useNavigate();

  return (

    <div className="contact">

      <div className="row">
        <div className="col text-center">
          <h2>Contactez nous</h2>
        </div>
      </div>

      <div className="row">

        <div className="col d-none d-lg-block">
          &nbsp;
        </div>

        <div className="col col-lg-6">

          <div className="row">
            <div className="col text-center">
              <Alert>
                <Icon.Bell className='note--icon' color="red" size="1.3rem" /> Page en construction, formulaire non fonctionnel.
              </Alert>
            </div>
          </div>

          <Form className="form">

            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                className="input"
                type="text"
                name="nom"
                placeholder="Vôtre nom"
              />
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Label>Adresse email</Form.Label>
              <Form.Control
                className="input"
                type="email"
                name="email"
                placeholder="Vôtre adresse mail"
              />
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Vôtre message" />
            </Form.Group>

            <div className="row">

              <div className="col text-center">
                <Button className="btn btn-primary text-white shadow my-4" type="button" onClick={() => goback(-1)}>
                  Annuler
                </Button>
              </div>

              <div className="col text-center">
                {/* Submit disabled */}
                {/* <Button className="btn btn-primary text-white shadow my-4" type="submit"> */}
                <Button className="btn btn-primary text-white shadow my-4" type="button">
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
}

// Export
export default Contact;
