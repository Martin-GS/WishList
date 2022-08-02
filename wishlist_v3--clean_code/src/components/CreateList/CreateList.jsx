// Import modules
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

// Import auth
import { getToken } from '../../utils/auth';

// Import style
import { Form, Button } from 'react-bootstrap';
import './createlist.scss';

// Component
function CreateList() {

  // States
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [coment, setComent] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const token = getToken();

  const handleSubmit = (event) => {

    event.preventDefault();

    setLoading(true);
    setIsError(false);

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
        setIsError(true);
      }).finally(() => {
        setLoading(false);
      });
  };

  // Redirection if data
  if (data) {
    return <Navigate replace to="/lists" />
  }

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
                value={title}
                onChange={event => setTitle(event.target.value)}
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
                value={coment}
                onChange={(event) => setComent(event.target.value)}
              />
              <Form.Text className="text-muted">
                255 caractères maximum
              </Form.Text>
            </Form.Group>

            {isError && <span className="createlist-form-error">Il y a eu une erreur.</span>}

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

}

// Export
export default CreateList;
