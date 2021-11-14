import React, { useContext, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { UserContext } from '../utils/UserContext';
import AddBugModal from '../modals/AddBugModal';
import BugCard from '../components/BugCard';
import { FaBug } from 'react-icons/fa';
const Profile = () => {
   const [showBugModal, setShowBugModal] = useState(false);
   const { user } = useContext(UserContext);
   if (!user) {
      return <h2>error loading user...</h2>;
   }
   return (
      <>
         <h4 className='text-center my-3'>Welcome, {user.username}, here are the bugs you've reported!</h4>
         <div className='text-center'>
            <Button className='my-2' onClick={() => setShowBugModal(true)}>
               <FaBug className='mx-2' />
               Report Bug
            </Button>
         </div>
         <AddBugModal showModal={showBugModal} onHide={() => setShowBugModal(false)}></AddBugModal>
         <Row>
            {user.bugs.reverse().map(bug => {
               return (
                  <Col md={6}>
                     <BugCard bug={bug} key={bug._id}></BugCard>
                  </Col>
               );
            })}
         </Row>
      </>
   );
};
export default Profile;
