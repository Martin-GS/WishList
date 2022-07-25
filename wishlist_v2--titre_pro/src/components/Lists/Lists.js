// Import packages/modules
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as Icon from 'react-feather';

// Import others
import { getToken } from '../../utils/auth';

// Import components
import DeleteList from './DeleteList';
import Loader from '../Loader/loader';

// Import stylesheet
import './lists.scss';

// Component
const Lists = () => {
  // States
  const [getLists, setGetLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = getToken();
  const history = useHistory();

  // Fetch data from API
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

  // "Life-cycles"
  useEffect(() => {
    fetchLists();
  }, []);

  return (

    <div className="lists">

      { loading && <Loader /> }

      {/* Title (and add-list button in desktop mode) */}
      <div className="row mb-4">
        <div className="d-flex justify-content-between">
          <div className="lists-title">
            <h2>Mes listes</h2>
          </div>
          <div className="lists-addlist align-self-center d-none d-md-block">
            <a type="button" className="btn btn-outline-dark shadow" href="/lists/createlist" role="button">Nouvelle liste</a>
          </div>
        </div>
      </div>

      {/* Display lists : looping data from API */}
      <div className="row">

        { !loading && getLists
          .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
          .map((list) => (

            <div key={list.id} className="col-12 col-md-6 col-lg-4 mb-3 mx-auto">

              <div className="card shadow">
                <div className="d-flex justify-content-between">
                  <div className="mt-2 mb-1 mx-2">
                    <h3><a href={`/list/${list.id}`} className="fs-5 text-dark text-decoration-none">{list.title}</a></h3>
                  </div>
                  <div className="my-1">
                    <DeleteList getList={list} />
                  </div>
                </div>
                <div className="mb-1 mx-2">
                  <a href={`/list/${list.id}`} className="link-secondary text-decoration-none">{list.coment}</a>
                </div>
              </div>

            </div>

          ))}

      </div>

      {/* Lists-Footer : displayed only in Lists component */}

      <div className="lists-footer">

        {/* phantom lists-footer */}

        <div className="row py-3">
          <div className="col">
            &nbsp;
          </div>
        </div>

        {/* real lists-footer */}

        <div className="fixed-bottom container-fluid d-flex py-3 bg-light justify-content-around">
          <div>
            <a type="button" className="bg-light border-0 link-dark" onClick={() => history.goBack()}>
              <Icon.ChevronLeft className="rounded border border-2 border-dark" size="1.6em" />
            </a>
          </div>
          <div>
            <a type="button" className="bg-light border-0 link-dark" href="/lists" role="button">
              <Icon.Home size="1.6em" />
            </a>
          </div>
          <div>
            <a type="button" className="bg-light border-0 link-dark" href="/lists/createlist" role="button">
              <Icon.Plus className="rounded border border-2 border-dark" size="1.6em" />
            </a>
          </div>

        </div>

      </div>

    </div>

  );
};

// Export component
export default Lists;
