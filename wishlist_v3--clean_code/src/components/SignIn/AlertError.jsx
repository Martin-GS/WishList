// // Import packages/modules
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Modal, Button } from 'react-bootstrap';

// // Import stylesheet
// import './signin.scss';

// // Component
// const AlertError = () => {
//   // State
//   const [show, setShow] = useState(true);

//   const handleClose = () => setShow(false);

//   return (
//     <div className="alerterror">

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header>
//           <Modal.Title>eMail et/ou mot de passe incorrect(s)</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Veuillez bien rentrer votre adresse mail (courriel) et votre mot de passe (password), et réessayer.</p>
//           <p>Si vous n'êtes pas encore inscrit(e), vous pouvez le faire <Link to="/signup">ICI</Link>.</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleClose}>
//             Fermer
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// // Export component
// export default AlertError;
