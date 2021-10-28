import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { UPDATE_BUG } from '../utils/mutations';
import { UserContext } from '../utils/UserContext';
const EditStatusButton = ({ bug }) => {
   const [updateBug] = useMutation(UPDATE_BUG);
   const { user, setUser } = useContext(UserContext);
   const handleClick = async ({ target }) => {
      try {
         const { data } = await updateBug({
            variables: {
               bug: {
                  _id: bug._id,
                  description: bug.description,
                  replicate: bug.replicate,
                  errorMessage: bug.errorMessage,
                  softwareTitle: bug.softwareTitle,
                  version: bug.version,
                  status: target.innerText,
               },
            },
         });
         setUser(data.updateBug);
      } catch (err) {
         console.log(err);
      }
   };

   if (user?._id != bug.reportedBy._id) {
      return <h2 className="text-primary">{bug.status}</h2>;
   }
   return (
      <DropdownButton title={bug.status}>
         <Dropdown.Item onClick={handleClick}>Reported</Dropdown.Item>
         <Dropdown.Item onClick={handleClick}>Need more information</Dropdown.Item>
         <Dropdown.Item onClick={handleClick}>In progress</Dropdown.Item>
         <Dropdown.Item onClick={handleClick}>Fixed</Dropdown.Item>
      </DropdownButton>
   );
};
export default EditStatusButton;
