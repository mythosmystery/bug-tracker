import React from 'react';
import { Modal } from 'react-bootstrap';
const UpdateStatusModal = ({ showModal, onHide, refetch }) => {
   return (
      <Modal size="lg" show={showModal} onHide={onHide} aria-labelledby="status-modal">
         <Modal.Header closeButton>
            <Modal.Title>Update Bug Status</Modal.Title>
         </Modal.Header>
         <Modal.Body>Body</Modal.Body>
      </Modal>
   );
};
export default UpdateStatusModal;
