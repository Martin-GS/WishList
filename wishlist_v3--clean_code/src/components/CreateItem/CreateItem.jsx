// Import modules
import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';

// Import auth
import { getToken } from '../../utils/auth';

// Import style
import { Form, Button } from 'react-bootstrap';
import './createitem.scss';

// Component
const CreateItem = ({ dataId }) => {
  // States
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [coment, setComent] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { id } = useParams();
  const token = getToken();

  const handleSubmit = (evt) => {

    evt.preventDefault();

    setLoading(true);
    setIsError(false);

    const data = {
      title: title,
      url: url,
      coment: coment,
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
        setIsError(true);
      }).finally(() => {
        setLoading(false);
      });
  };

  // Redirect if data
  if (data) {
    return <Navigate replace to={`/list/${id}`} />
  }

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
                value={title}
                onChange={(evt) => setTitle(evt.target.value)}
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
                value={url}
                onChange={(evt) => setUrl(evt.target.value)}
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
                value={coment}
                onChange={(evt) => setComent(evt.target.value)}
              />
              <Form.Text className="text-muted">
                255 caractères maximum
              </Form.Text>
            </Form.Group>

            {isError && <span className="createitem-form-error">Il y a eu une erreur.</span>}

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
                  disabled={loading}>
                  {loading ? 'Loading...' : 'Valider'}
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

// Export component
export default CreateItem;
