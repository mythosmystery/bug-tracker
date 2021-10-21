import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { REMOVE_BUG } from '../utils/mutations';
import { UserContext } from '../utils/UserContext';
const RemoveBugButton = ({ bugId }) => {
   const { setUser } = useContext(UserContext);
   const [removeBug] = useMutation(REMOVE_BUG);
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
      <Button className="mx-2" onClick={handleRemove}>
         Remove
      </Button>
   );
};
export default RemoveBugButton;
