import { useState } from 'react';
import { Button } from 'react-bootstrap';
import EditBugModal from '../modals/EditBugModal';
const EditBugButton = ({ bug }) => {
   const [showModal, setShowModal] = useState(false);
   return (
      <>
         <Button className="mx-2" onClick={() => setShowModal(true)}>
            Edit
         </Button>
         <EditBugModal showModal={showModal} onHide={() => setShowModal(false)} bug={bug}></EditBugModal>
      </>
   );
};
export default EditBugButton;
