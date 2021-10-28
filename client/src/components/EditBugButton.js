import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import EditBugModal from '../modals/EditBugModal';
import { UserContext } from '../utils/UserContext';
const EditBugButton = ({ bug }) => {
   const { user } = useContext(UserContext);
   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <Button className="mx-2" onClick={() => setShowModal(true)} hidden={user?._id != bug.reportedBy._id}>
            Edit
         </Button>
         <EditBugModal showModal={showModal} onHide={() => setShowModal(false)} bug={bug}></EditBugModal>
      </>
   );
};
export default EditBugButton;
