import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../utils/UserContext';
import AddBugModal from '../modals/AddBugModal';
import BugCard from '../components/BugCard';
const Profile = () => {
   const [showBugModal, setShowBugModal] = useState(false);
   const { user } = useContext(UserContext);
   if (!user) {
      return <h2>error loading bugs...</h2>;
   }
   return (
      <>
         <h2>My Bugs</h2>
         <Button onClick={() => setShowBugModal(true)}>Report Bug</Button>
         <AddBugModal showModal={showBugModal} onHide={() => setShowBugModal(false)}></AddBugModal>
         {user.bugs.reverse().map(bug => {
            return <BugCard bug={bug} key={bug._id}></BugCard>;
         })}
      </>
   );
};
export default Profile;
