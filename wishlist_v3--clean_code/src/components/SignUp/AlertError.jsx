// Import modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import style
import { Modal, Button } from 'react-bootstrap';
import './signup.scss';

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
          <p>Veuillez remplir tous les champs, et vérifier que vous avez entré les informations correctes.</p>
          <p>Si vous avez déjà un compte, veuillez suivre <Link to="/signin">CE LIEN</Link>.</p>
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
