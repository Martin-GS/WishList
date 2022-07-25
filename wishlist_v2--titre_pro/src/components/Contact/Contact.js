// Import packages/modules
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

// Import stylesheet
import './contact.scss';

// Component
const Contact = () => (

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
              rows={3}
              placeholder="Vôtre message" />
          </Form.Group>

          <div className="row">

            <div className="col text-center">
              <Link to="/">
                <Button className="btn btn-primary text-white shadow my-4" type="button">
                  Annuler
                </Button>
              </Link>
            </div>

            <div className="col text-center">
              <Button className="btn btn-primary text-white shadow my-4" type="submit">
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

// Export component
export default Contact;
