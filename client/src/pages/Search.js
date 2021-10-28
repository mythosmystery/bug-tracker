import { useQuery } from '@apollo/client';
import { SEARCH_BUGS } from '../utils/queries';
import { useState } from 'react';
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
   return (
      <>
         <Row className="">
            <Col className="flex">
               <DropdownButton title={filterState || 'Filter'} className="my-2">
                  <Dropdown.Item onClick={handleClick}>Reported</Dropdown.Item>
                  <Dropdown.Item onClick={handleClick}>Need more information</Dropdown.Item>
                  <Dropdown.Item onClick={handleClick}>In progress</Dropdown.Item>
                  <Dropdown.Item onClick={handleClick}>Fixed</Dropdown.Item>
               </DropdownButton>
            </Col>
            <Col sm={1}>
               <Button onClick={() => setFilterState(null)} variant="warning" className="my-2">
                  Clear
               </Button>
            </Col>
         </Row>
         <Form className="my-3" onSubmit={onSubmit}>
            <Form.Group>
               <InputGroup>
                  <InputGroup.Text>
                     <FaSearch />
                  </InputGroup.Text>
                  <Form.Control type="content" placeholder="Search for software..." name="softwareTitle" onChange={onChange} />
               </InputGroup>
            </Form.Group>
         </Form>
         <Row>
            {searchResults ? (
               searchResults.map(bug => {
                  return bug.status === filterState || !filterState ? (
                     <Col lg={6}>
                        <BugCard key={bug._id} bug={bug} refetch={search} />
                     </Col>
                  ) : (
                     <></>
                  );
               })
            ) : (
               <h4 className="text-center">No search results!</h4>
            )}
         </Row>
      </>
   );
};
export default Search;
