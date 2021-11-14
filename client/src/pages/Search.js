import { useQuery } from '@apollo/client';
import { SEARCH_BUGS } from '../utils/queries';
import { useEffect, useState } from 'react';
import { Form, InputGroup, Row, Col, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import BugCard from '../components/BugCard';
import { FaSearch, FaFilter } from 'react-icons/fa';
const Search = () => {
   const [searchValue, setSearchValue] = useState('');
   const [filterState, setFilterState] = useState(null);
   const [searchResults, setSearchResults] = useState(null);
   const { refetch } = useQuery(SEARCH_BUGS, { variables: { softwareTitle: '' } });
   const onSubmit = event => {
      event.preventDefault();
      search();
   };
   const onChange = event => {
      setSearchValue(event.target.value);
   };
   const search = async () => {
      const { data } = await refetch({ softwareTitle: searchValue });
      setSearchResults(data.bugsBySoftware);
   };
   const handleClick = ({ target }) => {
      setFilterState(target.innerText);
   };
   console.log(searchResults);
   return (
      <>
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
         <Form className='my-3' onSubmit={onSubmit}>
            <Form.Group>
               <InputGroup>
                  <InputGroup.Text>
                     <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                     type='content'
                     placeholder='Search for software...'
                     name='softwareTitle'
                     value={searchValue}
                     onChange={onChange}
                  />
               </InputGroup>
            </Form.Group>
         </Form>
         <Row>
            {searchResults?.length ? (
               searchResults.map(bug => {
                  return bug.status === filterState || !filterState ? (
                     <Col md={6} key={bug._id}>
                        <BugCard bug={bug} refetch={search} />
                     </Col>
                  ) : (
                     <></>
                  );
               })
            ) : (
               <h4 className='text-center display-6'>
                  {searchResults ? 'No search results!' : 'Search by software title'}
               </h4>
            )}
         </Row>
      </>
   );
};
export default Search;
