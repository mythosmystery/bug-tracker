import { Modal, Button } from 'react-bootstrap';
const ConfirmModal = ({ showModal, onHide, callback, modalText }) => {
   return (
      <Modal show={showModal} onHide={onHide}>
         <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
         </Modal.Header>
         <Modal.Body>{modalText}</Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
               Close
            </Button>
            <Button onClick={callback}>Confirm</Button>
         </Modal.Footer>
      </Modal>
   );
};
export default ConfirmModal;
