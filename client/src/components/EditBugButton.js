import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import EditBugModal from '../modals/EditBugModal';
import { UserContext } from '../utils/UserContext';
import { FaEdit } from 'react-icons/fa';
const EditBugButton = ({ bug }) => {
   const { user } = useContext(UserContext);
   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <Button
            variant='outline-warning'
            className='mx-2 text-center'
            onClick={() => setShowModal(true)}
            hidden={user?._id != bug.reportedBy._id}
         >
            <FaEdit size='20' />
         </Button>
         <EditBugModal showModal={showModal} onHide={() => setShowModal(false)} bug={bug}></EditBugModal>
      </>
   );
};
export default EditBugButton;
