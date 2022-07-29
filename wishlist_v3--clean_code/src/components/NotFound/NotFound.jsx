// Import modules
import React from 'react';
import { Link } from "react-router-dom";

// Import style
import { Button } from 'react-bootstrap';
import './notfound.scss';

// Import images
import notfound from '../../assets/images/notfound.jpg';

// Component
function NotFound() {

  return (

    <div className="notfound">

      <div className="row my-4">

        <div className="col-12 col-md-6 mx-auto">
          <img src={notfound} className="img-fluid" alt="Error 404 - Page non trouvée" />
        </div>

        <div className="col-12 col-md-6 mx-auto">
          <div className="my-3 text-center">
            <h2>Error 404</h2>
            <h3>Page non trouvée</h3>
            <p>
              Oups !<br />
              La page que vous recherchez n'existe pas,<br />
              ou l'article n'est plus disponible.
            </p>
            <Link to="/">
              <Button className="btn btn-primary text-white shadow-sm my-4" type="button">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>

      </div>

    </div>

  );

}

// Export
export default NotFound;
