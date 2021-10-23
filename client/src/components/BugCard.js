import React from 'react';
import { Card, Button } from 'react-bootstrap';
import RemoveBugButton from './RemoveBugButton';
import EditStatusButton from './EditStatusButton';
const BugCard = ({ bug }) => {
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
         </Card.Body>
         <Card.Footer>
            Version: {bug.version}
            <RemoveBugButton bugId={bug._id}></RemoveBugButton>
         </Card.Footer>
      </Card>
   );
};
export default BugCard;
