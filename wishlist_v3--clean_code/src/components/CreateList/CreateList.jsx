// Import modules
import React from 'react';
import { Link } from "react-router-dom";

// Import style
import { Form, Button } from 'react-bootstrap';
import './createlist.scss';

// Component
function CreateList() {

  return (

    <div className="createlist">

      {/* Page title */}

      <div className="row text-center">
        <h2>Nouvelle liste</h2>
      </div>

      {/* New list form */}

      <div className="row mx-auto">

        {/* Phantom left div : center form in large screen */}
        <div className="col d-none d-lg-block">
          &nbsp;
        </div>

        <div className="col col-lg-6">

          <Form className="form">

            <Form.Group className="my-4">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                className="input"
                id="title"
                placeholder="Titre"
              />
              <Form.Text className="text-muted">
                45 caractères maximum
              </Form.Text>
            </Form.Group>

            <Form.Group className="my-4">
              <Form.Label>Commentaire</Form.Label>
              <Form.Control
                type="text"
                className="input"
                id="coment"
                placeholder="Commentaire"
              />
              <Form.Text className="text-muted">
                255 caractères maximum
              </Form.Text>
            </Form.Group>

            <div className="row">

              <div className="col text-center">
                <Link to="/lists">
                  <Button className="btn btn-secondary text-white shadow-sm my-4" type="button">
                    Annuler
                  </Button>
                </Link>
              </div>

              <div className="col text-center">
                <Button className="btn btn-primary text-white shadow my-4">
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
export default CreateList;
