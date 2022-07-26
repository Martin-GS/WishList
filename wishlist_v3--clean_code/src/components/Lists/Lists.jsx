import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { getToken } from '../../utils/auth';
import DeleteList from './DeleteList'
import Loader from '../Loader/Loader';

function Lists() {

  const [getLists, setGetLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = getToken();

  const fetchLists = () => {
    setLoading(true);
    axios.get(`https://onedream-onewish.herokuapp.com/lists`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then((res) => {
        setGetLists(res.data);
      })
      .catch((err) => {
        window.location.href = '/notFound';
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <div className="lists">

      {loading && <Loader />}

      {/* Title and add-list button */}
      <div className="row mb-5">
        <div className="d-flex justify-content-between">
          <div className="lists-title">
            <h2>Mes listes</h2>
          </div>
          <div>
            <Link to="../lists/createList">
              <Button className="btn btn-primary text-white shadow-sm" type="button">
                Nouvelle liste
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Display lists : looping data from API */}
      <div className="row">

        {!loading && getLists
          .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
          .map((list) => (

            <div key={list.id} className="col-12 col-md-6 col-lg-4 mb-3 mx-auto">

              <div className="card shadow">
                <div className="d-flex justify-content-between">
                  <div className="mt-2 mb-1 mx-2">
                    <h3>
                      <Link to={`/list/${list.id}`} className="fs-5 text-dark text-decoration-none">
                        {list.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="my-1">
                    <DeleteList list={list} fetchLists={fetchLists} />
                  </div>
                </div>
                <div className="mb-1 mx-2">
                  <Link to={`/list/${list.id}`} className="link-secondary text-decoration-none">
                    {list.coment}
                  </Link>
                </div>
              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Lists;