// Import modules
import React from 'react';
import { Form, Button } from 'react-bootstrap';

// Import components

// Miscellaneous
import './createlist.scss';

// Component
function CreateList() {

  return (

    <div className="createlist">

      {/* Page title */}

      <div className="row">
        <div className="col text-center">
          <h2>Nouvelle liste</h2>
        </div>
      </div>

      {/* New list form */}

      <div className="row mx-auto">

        <div className="col d-none d-lg-block">&nbsp;</div>

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
                <Button className="btn btn-primary text-white shadow my-4" variant="primary" type="button">
                  Annuler
                </Button>
              </div>
              <div className="col text-center">
                <Button className="btn btn-primary text-white shadow my-4">
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

}

// Export
export default CreateList;
