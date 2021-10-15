import React from 'react';
import { Modal } from 'react-bootstrap';
import AddBugForm from '../components/AddBugForm';
const AddBugModal = ({ showModal, onHide, refetch }) => {
   return (
      <Modal size="lg" show={showModal} onHide={onHide} aria-labelledby="account-modal">
         <Modal.Header closeButton>
            <Modal.Title>Report Bug</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <AddBugForm refetch={refetch} handleModalClose={onHide}></AddBugForm>
         </Modal.Body>
      </Modal>
   );
};
export default AddBugModal;