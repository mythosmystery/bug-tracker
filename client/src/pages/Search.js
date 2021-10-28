import { useQuery } from '@apollo/client';
import { SEARCH_BUGS } from '../utils/queries';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import BugCard from '../components/BugCard';
const Search = () => {
   const [searchValue, setSearchValue] = useState('');
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
   return (
      <>
         <Form className="my-3" onSubmit={onSubmit}>
            <Form.Group>
               <Form.Control type="content" placeholder="Search for software..." name="softwareTitle" onChange={onChange} />
            </Form.Group>
         </Form>
         {searchResults ? (
            searchResults.map(bug => {
               return <BugCard key={bug._id} bug={bug} refetch={search} />;
            })
         ) : (
            <h4>No search results!</h4>
         )}
      </>
   );
};
export default Search;
