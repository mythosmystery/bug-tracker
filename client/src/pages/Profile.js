import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import AddBugModal from '../modals/AddBugModal';
const Profile = () => {
   const [showBugModal, setShowBugModal] = useState(false);
   const { data, loading, refetch } = useQuery(GET_ME);
   if (loading) return <h2>Loading</h2>;
   console.log(data);
   return (
      <>
         <h2>My Profile</h2>
         <Button onClick={() => setShowBugModal(true)}>Report Bug</Button>
         <AddBugModal showModal={showBugModal} onHide={() => setShowBugModal(false)} refetch={refetch}></AddBugModal>
      </>
   );
};
export default Profile;
