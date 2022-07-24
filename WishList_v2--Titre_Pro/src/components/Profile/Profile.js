// Import packages/modules
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import * as Icon from 'react-feather';

// Import local components and others
import Loader from '../Loader/loader';
import { getToken } from '../../utils/auth';

// Import components
import UserCard from './UserCard';

// Import stylesheet
import './profile.scss';

// Component
const Profile = () => {
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = getToken();
  const history = useHistory();

  const userpseudo = dataUser.pseudo;
  const useremail = dataUser.email;

  // Fetch data from API
  const fetchDataUser = () => {
    setLoading(true);
    axios.post(`https://onedream-onewish.herokuapp.com/user`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then((res) => {
        setDataUser(res.data);
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
    fetchDataUser();
  }, []);

  return (

    <div className="profile">

      { loading && <Loader /> }

      <div className="row mt-5">
        <div className="col">
          <Icon.User size="8em" className="mx-auto d-block" />
        </div>
      </div>

      <div className="row my-4">
        <div className="col-1 col-md-2 col-lg-3 mx-auto"> </div>
        <UserCard dataUser={dataUser} />
        <div className="col-1 col-md-2 col-lg-3"> </div>
      </div>

      <div className="row d-flex justify-content-around">
        <div className="col text-center mt-4">
          <Link to="/">
            <button className="btn btn-outline-dark btn-sm shadow" type="button">
              Supprimer
            </button>
          </Link>
        </div>
        <div className="col text-center mt-4">
          <a type="button" className="btn btn-primary text-white btn-sm" href="/user/update">
            Modifier
          </a>
        </div>
        <div className="col text-center mt-4">
          <a type="button" className="btn btn-primary text-white btn-sm" onClick={() => history.goBack()}>
            Retour
          </a>
        </div>
      </div>

    </div>

  );
};

// Export component
export default Profile;
