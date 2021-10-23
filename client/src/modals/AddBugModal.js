import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import AddBugForm from '../components/AddBugForm';
import { ADD_BUG } from '../utils/mutations';
import { UserContext } from '../utils/UserContext';
const AddBugModal = ({ showModal, onHide }) => {
   const { setUser } = useContext(UserContext);
   const [addBug] = useMutation(ADD_BUG);
   const defaultState = { description: '', replicate: '', errorMessage: '', softwareTitle: '', version: '', status: 'Reported' };
   return (
      <Modal size="lg" show={showModal} onHide={onHide} aria-labelledby="account-modal">
         <Modal.Header closeButton>
            <Modal.Title>Report Bug</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <AddBugForm handleModalClose={onHide} defaultState={defaultState} onSubmit={addBug} mutation="addBug"></AddBugForm>
         </Modal.Body>
      </Modal>
   );
};
export default AddBugModal;
