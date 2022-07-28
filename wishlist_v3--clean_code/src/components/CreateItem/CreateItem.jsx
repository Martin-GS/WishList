// Import modules
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

// Import style
import './createitem.scss';

// Component
const CreateItem = ({dataId}) => {

  return (

    <div className="createitem">

      {/* Page title */}

      <div className="row">
        <div className="col text-center">
          <h2>Nouvel article</h2>
        </div>
      </div>

      {/* New item form */}

      <div className="row mx-auto">

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
              <Form.Label>Lien de l'article</Form.Label>
              <Form.Control
                type="text"
                className="input"
                id="url"
                placeholder="Lien (URL)"
              />
              <Form.Text className="text-muted">
                255 caractères maximum
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
                {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                {/* !!! dataId non défini, à coriger lors de la mise en place des props */}
                {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <Link to={`/list/${dataId}`}>
                  <Button className="btn btn-secondary text-white shadow my-4" variant="primary" type="button">
                    Annuler
                  </Button>
                </Link>
              </div>

              <div className="col text-center">
                  <Button className="btn btn-primary text-white shadow-sm my-4" type="button">
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
export default CreateItem;
