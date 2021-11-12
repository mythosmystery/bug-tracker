import { useQuery } from '@apollo/client';
import { storeKeyNameFromField } from '@apollo/client/utilities';
import { useEffect, useState } from 'react';
import { Row, Col, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import BugCard from '../components/BugCard';
import { ALL_BUGS } from '../utils/queries';

const Browse = () => {
   const { data, loading, error, refetch } = useQuery(ALL_BUGS);
   const [filterState, setFilterState] = useState(null);
   const handleClick = ({ target }) => {
      setFilterState(target.innerText);
   };
   useEffect(() => {
      refetch();
   }, []);
   if (loading || error) {
      return <h5>loading...</h5>;
   }
   return (
      <>
         <h1 className='text-center display-4'>Browse Bugs</h1>
         <Row className=''>
            <Col className='flex'>
               <DropdownButton title={filterState || 'Filter'} className='my-2'>
                  <Dropdown.Item onClick={handleClick}>Reported</Dropdown.Item>
                  <Dropdown.Item onClick={handleClick}>Need more information</Dropdown.Item>
                  <Dropdown.Item onClick={handleClick}>In progress</Dropdown.Item>
                  <Dropdown.Item onClick={handleClick}>Fixed</Dropdown.Item>
               </DropdownButton>
            </Col>
            <Col sm={1}>
               <Button onClick={() => setFilterState(null)} variant='warning' className='my-2'>
                  Clear
               </Button>
            </Col>
         </Row>
         <Row>
            {data.bugs.map(bug => {
               return bug.status === filterState || !filterState ? (
                  <Col md={6}>
                     <BugCard key={bug._id} bug={bug} refetch={refetch} />
                  </Col>
               ) : (
                  <></>
               );
            })}
         </Row>
      </>
   );
};
export default Browse;
