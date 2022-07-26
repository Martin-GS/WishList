import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { getToken } from '../../utils/auth';
import AlertError from '../AlertError/AlertError';
import Loader from '../Loader/Loader';

function CreateList() {

  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [coment, setComent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const token = getToken();

  const handleSubmit = (event) => {

    event.preventDefault();

    setLoading(true);
    setError(false);

    const data = {
      title,
      coment
    };

    axios.post('https://onedream-onewish.herokuapp.com/lists', data, {
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then((res) => {
        setData(res.data);
        setTitle('');
        setComent('');
      })
      .catch((err) => {
        setError(<AlertError />);
      }).finally(() => {
        setLoading(false);
      });
  };

  if (data) {
    return <Navigate replace to="/lists" />
  }

  return (

    <div className="createlist">

      {loading && <Loader />}

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

            {(error !== '') ? (<div className="error">{error}</div>) : ''}

            <div className="col text-center">
              <Form.Text className="text-center">
                * Champs obligatoires
              </Form.Text>
            </div>

            <Form.Group className="my-4">
              <Form.Label>Titre *</Form.Label>
              <Form.Control
                type="text"
                className="input"
                id="title"
                placeholder="Titre"
                maxLength={45}
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
              <Form.Text className="text-muted">
                45 caractères maximum
              </Form.Text>
            </Form.Group>

            <Form.Group className="my-4">
              <Form.Label>Commentaire *</Form.Label>
              <Form.Control
                type="text"
                className="input"
                id="coment"
                placeholder="Commentaire"
                maxLength={255}
                value={coment}
                onChange={(event) => setComent(event.target.value)}
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
                <Button
                  className="btn btn-primary text-white shadow my-4"
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit}
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

export default CreateList;