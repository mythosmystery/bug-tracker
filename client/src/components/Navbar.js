import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AccountModal from '../modals/AccountModal';
import Auth from '../utils/auth';
import { FaBug } from 'react-icons/fa';

const AppNavbar = () => {
   // set modal display state
   const [showAccountModal, setShowAccountModal] = useState(false);

   return (
      <>
         <Navbar bg='dark' variant='dark' expand='sm' sticky='top'>
            <Container fluid>
               <FaBug size='20' className='text-white mx-2' />
               <Navbar.Brand>Bug Tracker</Navbar.Brand>
               <Navbar.Toggle aria-controls='navbar' />
               <Navbar.Collapse id='navbar' className='justify-content-end'>
                  <Nav>
                     <Nav.Link as={Link} to='/'>
                        Home
                     </Nav.Link>
                     <Nav.Link as={Link} to='/search'>
                        Search
                     </Nav.Link>
                     <Nav.Link as={Link} to='/browse'>
                        Browse
                     </Nav.Link>
                     {Auth.loggedIn() ? (
                        <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                     ) : (
                        <Nav.Link onClick={() => setShowAccountModal(true)}>Login/Sign Up</Nav.Link>
                     )}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <AccountModal showModal={showAccountModal} onHide={() => setShowAccountModal(false)} />
      </>
   );
};

export default AppNavbar;
