import React, { useContext, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { UserContext } from '../utils/UserContext';
import AddBugModal from '../modals/AddBugModal';
import BugCard from '../components/BugCard';
const Profile = () => {
   const [showBugModal, setShowBugModal] = useState(false);
   const { user } = useContext(UserContext);
   if (!user) {
      return <h2>error loading user...</h2>;
   }
   return (
      <>
         <Button className="my-2" onClick={() => setShowBugModal(true)}>
            Report Bug
         </Button>
         <AddBugModal showModal={showBugModal} onHide={() => setShowBugModal(false)}></AddBugModal>
         <Row>
            {user.bugs.map(bug => {
               return (
                  <Col lg={6}>
                     <BugCard bug={bug} key={bug._id}></BugCard>
                  </Col>
               );
            })}
         </Row>
      </>
   );
};
export default Profile;
