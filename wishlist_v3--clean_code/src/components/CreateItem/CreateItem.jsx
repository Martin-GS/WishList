import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { getToken } from '../../utils/auth';
import AlertError from '../AlertError/AlertError';
import Loader from '../Loader/Loader';

const CreateItem = () => {

  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [coment, setComent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams();
  const token = getToken();

  const handleSubmit = (event) => {

    event.preventDefault();

    setLoading(true);
    setError(false);

    const data = {
      title,
      url,
      coment
    };

    axios.post(`https://onedream-onewish.herokuapp.com/list/${id}`, data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then((res) => {
        setData(res.data);
        setTitle('');
        setUrl('');
        setComent('');
      }).catch((err) => {
        setError(<AlertError />);
      }).finally(() => {
        setLoading(false);
      });
  };

  if (data) {
    return <Navigate replace to={`/list/${id}`} />
  }

  return (

    <div className="createitem">

      {loading && <Loader />}

      {/* Page title */}

      <div className="row text-center">
        <h2>Nouvel article</h2>
      </div>

      {/* New item form */}

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
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <Form.Text className="text-muted">
                45 caractères maximum
              </Form.Text>
            </Form.Group>

            <Form.Group className="my-4">
              <Form.Label>Lien de l'article *</Form.Label>
              <Form.Control
                type="text"
                className="input"
                id="url"
                placeholder="Lien (URL)"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />
              <Form.Text className="text-muted">
                255 caractères maximum
              </Form.Text>
            </Form.Group>

            <Form.Group className="my-4">
              <Form.Label>Commentaire *</Form.Label>
              <Form.Control
                type="text"
                className="input"
                id="coment"
                placeholder="Commentaire"
                value={coment}
                onChange={(event) => setComent(event.target.value)}
              />
              <Form.Text className="text-muted">
                255 caractères maximum
              </Form.Text>
            </Form.Group>

            <div className="row">

              <div className="col text-center">
                <Link to={`/list/${id}`}>
                  <Button className="btn btn-secondary text-white shadow my-4" variant="primary" type="button">
                    Annuler
                  </Button>
                </Link>
              </div>

              <div className="col text-center">
                <Button
                  className="btn btn-primary text-white shadow-sm my-4"
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
};

export default CreateItem;