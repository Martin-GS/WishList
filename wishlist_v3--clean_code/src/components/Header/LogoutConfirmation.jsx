import React from 'react'
import { Modal, Button } from "react-bootstrap";

const DeleteConfirmation = ({ showModal, hideModal, confirmModal }) => {

  return (

    <Modal show={showModal} onHide={hideModal}>

      <Modal.Header closeButton>
        <Modal.Title>Confirmation de déconnexion</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>Voulez vous quitter la session actuelle ?</div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success text-light" onClick={hideModal}>
          Annuler
        </Button>
        <Button variant="danger" onClick={() => confirmModal()}>
          Confirmer
        </Button>
      </Modal.Footer>

    </Modal>

  )

}

export default DeleteConfirmation;