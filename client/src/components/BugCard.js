import React from 'react';
import { Card } from 'react-bootstrap';
const BugCard = ({ bug }) => {
   return (
      <Card className="my-2">
         <Card.Header>Status: {bug.status}</Card.Header>
         <Card.Body>
            <Card.Title>{bug.softwareTitle}</Card.Title>
            <Card.Text>{bug.description}</Card.Text>
            <Card.Text>{bug.replicate}</Card.Text>
            <Card.Text>{bug.errorMessage}</Card.Text>
         </Card.Body>
         <Card.Footer>Version: {bug.version}</Card.Footer>
      </Card>
   );
};
export default BugCard;
