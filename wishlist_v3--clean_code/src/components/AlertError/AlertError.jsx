import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AlertError = () => {

  const [show, setShow] = useState(true);

  const handleClose = (event) => {
    event.preventDefault();
    setShow(false);
  };

  return (

    <div className="alerterror">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Une erreur s'est produite.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Veuillez remplir tous les champs et vous assurer que les informations entrées sont correctes.</p>
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

export default AlertError;