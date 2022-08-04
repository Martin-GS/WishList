import React from 'react'
import { Modal, Button } from "react-bootstrap";

const DeleteConfirmation = ({ showModal, hideModal, confirmModal }) => {

  return (

    <Modal show={showModal} onHide={hideModal}>

      <Modal.Header closeButton>
        <Modal.Title>Confirmation de suppression</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>Voulez vous supprimer l'élément sélectionné ainsi que son contenu ?</div>
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