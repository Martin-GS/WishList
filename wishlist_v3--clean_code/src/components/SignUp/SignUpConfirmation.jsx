import React from 'react'
import { Modal, Button } from "react-bootstrap";

const SignUpConfirmation = ({ displayModal, submitConfirmation }) => {

  return (

    <div className="signupconfirmation">

      <Modal show={displayModal}>

        <Modal.Header>
          <Modal.Title>
            Bienvenue ! 👋
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Félicitation et merci pour vôtre confiance, vous venez de créer votre compte WishList. 🎉</p>
          <p>En cliquant sur le bouton de confirmation ci-dessous, vous serez redirigé.e vers vôtre page WishList, dans laquelle vous pourrez commencer à créer vos listes personnalisées, y ajouter vos articles préférés et les partager avec vos proches. 🎁</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary text-light" onClick={() => submitConfirmation()}>
            Confirmer
          </Button>
        </Modal.Footer>

      </Modal>

    </div>

  )

}

export default SignUpConfirmation;