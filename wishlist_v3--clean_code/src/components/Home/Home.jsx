import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { isUserAuthenticated } from '../../utils/auth';
import insigne from '../../assets/images/insigne.png';
import card1 from '../../assets/images/home-1.jpg';
import card2 from '../../assets/images/home-2.jpg';
import card3 from '../../assets/images/home-3.jpg';
import './home.scss';

function Home() {

  const [isAuth,] = useState(isUserAuthenticated());

  if (isAuth) {
    return <Navigate replace to="/lists" />
  }

  return (

    <div className="home">

      {/* Logo & buttons : "hero content" */}

      <div className="jumbotron my-4">

        <h2>
          <img className="logotype my-3 mx-auto d-block" src={insigne} alt="Insigne WishList" />
        </h2>

        <h3 className="text-center my-4">
          Toutes vos envies à portée de main !
        </h3>

        <div className="row">

          <div className="col d-none d-lg-block">
          </div>

          <div className="col text-center mt-4">
            <Link to="/signup">
              <Button className="btn btn-primary text-white shadow" type="button">
                S'enregistrer
              </Button>
            </Link>
          </div>

          <div className="col text-center mt-4">
            <Link to="/signin">
              <Button className="btn btn-primary text-white shadow" type="button">
                Se connecter
              </Button>
            </Link>
          </div>

          <div className="col d-none d-lg-block">
          </div>

        </div>

      </div>

      {/* Additional information : "cards" */}

      <div className="row my-5">

        <div className="col-12 col-md-6 col-lg-4 my-4 mx-auto">
          <div className="card border-info text-center shadow">
            <img className="card-img-top" src={card1} alt="Simple et rapide" />
            <div className="card-body">
              <h5 className="card-title">Simple et rapide</h5>
              <p className="card-text">Vos trouvailles, vos articles préférés, vos listes de cadeaux, crées en quelques clics !</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 my-4 mx-auto">
          <div className="card border-danger text-center shadow">
            <img className="card-img-top" src={card2} alt="Centralisé" />
            <div className="card-body">
              <h5 className="card-title">À portée de main</h5>
              <p className="card-text">Toutes vos envies à un seul endroit, toujours près de vous, accessibles facilement !</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mt-4 mx-auto">
          <div className="card border-warning text-center shadow">
            <img className="card-img-top" src={card3} alt="Personnalisé" />
            <div className="card-body">
              <h5 className="card-title">Personnalisé</h5>
              <p className="card-text">Des listes pour chaque personne, pour chaque besoin, pour chaque occasion !</p>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
}

export default Home;