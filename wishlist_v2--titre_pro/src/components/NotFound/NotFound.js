// Import packages/modules
import React from 'react';
import { useHistory } from "react-router-dom";

// Import stylesheet
import './notfound.scss';

// Import image
import notfoundimage from '../../assets/images/notfound.jpg';

// Component
const NotFound = () => {
  const history = useHistory();

  return (

    <div className="notfound">

      <div className="row my-4">

        <div className="col-12 col-md-6 mx-auto">
          <img src={notfoundimage} className="img-fluid" alt="Error 404 - Page non trouvée" />
        </div>

        <div className="col-12 col-md-6 mx-auto">

          <div className="my-3">
            <h1 className="text-center">Page non trouvée</h1>
            <p className="text-center">Error 404</p>
            <h5 className="text-center">Oups ! La page que vous recherchiez n'existe pas ou l'artcile n'est plus disponible.</h5>
          </div>

        </div>

      </div>

      <div className="row">
        <div className="col text-center">
          <a type="button" className="btn btn-primary shadow text-white mt-2" onClick={() => history.goBack()}>
            Revenir en arrière
          </a>
        </div>
      </div>

    </div>

  );
};

// Export component
export default NotFound;
