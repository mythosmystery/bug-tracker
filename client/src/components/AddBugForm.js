import React, { useContext, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from '../utils/UserContext';
const AddBugForm = ({ defaultState, mutation, onSubmit, handleModalClose }) => {
   const [formData, setFormData] = useState(defaultState);
   const [validated] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
   const { user, setUser } = useContext(UserContext);

   const handleInputChange = event => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleFormSubmit = async event => {
      event.preventDefault();

      // check if form has everything (as per react-bootstrap docs)
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
      }

      try {
         const { data } = await onSubmit({
            variables: {
               bug: { ...formData },
            },
         });
         setUser(data[mutation]);
         handleModalClose();
      } catch (err) {
         console.error(err);
         setShowAlert(true);
      }

      setFormData(defaultState);
   };

   return (
      <>
         {/* This is needed for the validation functionality above */}
         <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            {/* show alert if server response is bad */}
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
               Something went wrong with your submission!
            </Alert>

            <Form.Group>
               <Form.Label htmlFor="description">Description</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Description of the problem"
                  name="description"
                  onChange={handleInputChange}
                  value={formData.description}
                  required
               />
               <Form.Control.Feedback type="invalid">A description is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
               <Form.Label htmlFor="replicate">Replicate</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="How to replicate the bug"
                  name="replicate"
                  onChange={handleInputChange}
                  value={formData.replicate}
               />
            </Form.Group>

            <Form.Group>
               <Form.Label htmlFor="errorMessage">Error Message</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Error message"
                  name="errorMessage"
                  onChange={handleInputChange}
                  value={formData.errorMessage}
                  required
               />
               <Form.Control.Feedback type="invalid">Error message is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
               <Form.Label htmlFor="softwareTitle">Software Title</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Software Title"
                  name="softwareTitle"
                  onChange={handleInputChange}
                  value={formData.softwareTitle}
                  required
               />
               <Form.Control.Feedback type="invalid">Software title is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
               <Form.Label htmlFor="version">Version</Form.Label>
               <Form.Control type="input" placeholder="1.00" name="version" onChange={handleInputChange} value={formData.version} />
            </Form.Group>

            <Button
               className="my-2"
               disabled={!formData.description && !formData.softwareTitle && !formData.errorMessage}
               type="submit"
               variant="success"
            >
               Submit
            </Button>
         </Form>
      </>
   );
};
export default AddBugForm;
