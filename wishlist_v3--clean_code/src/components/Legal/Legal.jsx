// Import modules
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

// Import style
import './legal.scss';

// Component
function Legal() {

  return (

    <div className="legal">

      <div className="row">
        <div className="col text-center">
          <h2>Mentions légales</h2>
        </div>
      </div>

      <div className="row my-4">
        <div className="col">

          <div className='infos'>

            <h5>Ce site est développé par :</h5>

            <ul>
              <li>
                Martin GS
              </li>
              <li>
                Nicolas Bzn.
              </li>
              <li>
                Nicolas Brd.
              </li>
              <li>
                Thomas P.
              </li>
            </ul>

            <h5>Ce site est hébergé par :</h5>

            <ul>
              <li>
                Groupe LWS
              </li>
              <li>
                10 rue de Penthievre à Paris 8 (75008)
              </li>
              <li>
                Activité principale : traitement de données et hébergement
              </li>
              <li>
                Site : https://www.lws.fr
              </li>
            </ul>

          </div>

        </div>

      </div>

      <div className="col text-center">
        <Link to="/">
          <Button className="btn btn-primary text-white shadow-sm my-4" type="button">
            Retour à l'accueil
          </Button>
        </Link>
      </div>

    </div>

  );
}

// Export
export default Legal;
