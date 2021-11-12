import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FcOrganization, FcPositiveDynamic, FcServices, FcWorkflow } from 'react-icons/fc';
import { UserContext } from '../utils/UserContext';
const Home = () => {
   const { user, setUser } = useContext(UserContext);
   return (
      <div>
         <h2 className='display-1 my-5 text-center'>Super Simple Bug Tracker</h2>
         <p className='my-5 h5 text-center'>
            Manage and track bugs across multiple pieces of software and multiple teams. Easily report bugs, and search
            and filter relevant bugs. Track and update the status of bugs easily. Login or search for software to get
            started!
         </p>

         <Row>
            <Col xs={6} md={3}>
               <Row className='d-flex justify-content-center p-2'>
                  <FcServices size='80' />
               </Row>
               <Row>
                  <p className='text-center'>Improved debugging efficiency</p>
               </Row>
            </Col>
            <Col xs={6} md={3}>
               <Row className='d-flex justify-content-center p-2'>
                  <FcPositiveDynamic size='80' />
               </Row>
               <Row>
                  <p className='text-center'>Increase profits by decreasing dev costs</p>
               </Row>
            </Col>
            <Col xs={6} md={3}>
               <Row className='d-flex justify-content-center p-2'>
                  <FcOrganization size='80' />
               </Row>
               <Row>
                  <p className='text-center'>Designed to improve team synergy</p>
               </Row>
            </Col>
            <Col xs={6} md={3}>
               <Row className='d-flex justify-content-center p-2'>
                  <FcWorkflow size='80' />
               </Row>
               <Row>
                  <p className='text-center'>A Better development troubleshooting workflow</p>
               </Row>
            </Col>
         </Row>
      </div>
   );
};
export default Home;
