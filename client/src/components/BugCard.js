import React from 'react';
import { Card, Button } from 'react-bootstrap';
import RemoveBugButton from './RemoveBugButton';
import EditStatusButton from './EditStatusButton';
import EditBugButton from './EditBugButton';
import moment from 'moment';
const BugCard = ({ bug, refetch }) => {
   const datePosted = moment(bug.date).format('hh:mm a');
   return (
      <Card className="my-2">
         <Card.Header>
            <EditStatusButton bug={bug}></EditStatusButton>
         </Card.Header>
         <Card.Body>
            <Card.Title>{bug.softwareTitle}</Card.Title>
            <Card.Text>{bug.description}</Card.Text>
            <Card.Text>{bug.replicate}</Card.Text>
            <Card.Text>{bug.errorMessage}</Card.Text>
            <Card.Text>Version: {bug.version}</Card.Text>
         </Card.Body>
         <Card.Footer>
            Reported: {datePosted}
            <EditBugButton bug={bug}></EditBugButton>
            <RemoveBugButton bug={bug} refetch={refetch}></RemoveBugButton>
         </Card.Footer>
      </Card>
   );
};
export default BugCard;
