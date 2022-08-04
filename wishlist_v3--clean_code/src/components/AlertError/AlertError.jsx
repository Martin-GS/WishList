// Import modules
import React, { useState } from 'react';

// Import style
import { Modal, Button } from 'react-bootstrap';

// Component
const AlertError = () => {

  // State
  const [show, setShow] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
    // window.location.reload();
  };

  return (

    <div className="alerterror">

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Une erreur s'est produite.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Veuillez remplir tous les champs, et vous assurer que les informations entrées sont correctes.</p>
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
