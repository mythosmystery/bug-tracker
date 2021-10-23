import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { REMOVE_BUG } from '../utils/mutations';
import { UserContext } from '../utils/UserContext';
import ConfirmModal from '../modals/ConfirmModal';
const RemoveBugButton = ({ bugId }) => {
   const { setUser } = useContext(UserContext);
   const [removeBug] = useMutation(REMOVE_BUG);
   const [showModal, setShowModal] = useState(false);
   const handleRemove = async () => {
      try {
         const { data } = await removeBug({
            variables: {
               bugId,
            },
         });
         setUser(data.removeBug);
      } catch (err) {
         console.log(err);
      }
   };
   return (
      <>
         <ConfirmModal
            showModal={showModal}
            onHide={() => setShowModal(false)}
            callback={handleRemove}
            modalText="Do you wish remove this bug?"
         ></ConfirmModal>
         <Button variant="danger" className="mx-2" onClick={() => setShowModal(true)}>
            Remove
         </Button>
      </>
   );
};
export default RemoveBugButton;
