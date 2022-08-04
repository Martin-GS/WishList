// Import modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import style
import { Modal, Button } from 'react-bootstrap';
import './signin.scss';

// Component
const AlertError = () => {

  // State
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };

  return (

    <div className="alerterror">

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Une erreur s'est produite.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>eMail et/ou mot de passe incorrect(s).</p>
          <p>Veuillez remplir tous les champs, et vérifier que vous avez entré les informations correctes.</p>
          <p>Si vous n'êtes pas encore inscrit(e), vous pouvez créer un compte <Link to="/signup">ICI</Link>.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  );

};

// Export component
export default AlertError;
