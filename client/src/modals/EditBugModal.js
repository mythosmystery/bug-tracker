import { useMutation } from '@apollo/client';
import { Modal } from 'react-bootstrap';
import AddBugForm from '../components/AddBugForm';
import { UPDATE_BUG } from '../utils/mutations';
const EditBugModal = ({ showModal, onHide, bug }) => {
   const [updateBug] = useMutation(UPDATE_BUG);
   const defaultState = {
      _id: bug._id,
      description: bug.description,
      replicate: bug.replicate,
      errorMessage: bug.errorMessage,
      softwareTitle: bug.softwareTitle,
      version: bug.version,
      status: bug.status,
   };
   return (
      <Modal size="lg" show={showModal} onHide={onHide} aria-labelledby="account-modal">
         <Modal.Header closeButton>
            <Modal.Title>Edit Bug</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <AddBugForm handleModalClose={onHide} defaultState={defaultState} onSubmit={updateBug} mutation="updateBug"></AddBugForm>
         </Modal.Body>
      </Modal>
   );
};
export default EditBugModal;
