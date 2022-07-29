// Import modules
import React, { useState } from 'react';

// Import style
import { Modal, Button } from 'react-bootstrap';
import './signup.scss';

// Component
const AlertError = () => {

  // State
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div className="alerterror">

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Une erreur s'est produite, veuillez réessayer.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Une erreur s'est produite, veuillez réessayer.
          </p>
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
