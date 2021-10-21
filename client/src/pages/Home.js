import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../utils/UserContext';
const Home = () => {
   const { user, setUser } = useContext(UserContext);
   return (
      <Container>
         <h2>Home Page</h2>
         <pre>{JSON.stringify(user, null, 2)}</pre>
      </Container>
   );
};
export default Home;
