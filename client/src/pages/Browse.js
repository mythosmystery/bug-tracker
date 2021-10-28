import { useQuery } from '@apollo/client';
import { Row, Col } from 'react-bootstrap';
import BugCard from '../components/BugCard';
import { ALL_BUGS } from '../utils/queries';

const Browse = () => {
   const { data, loading, error, refetch } = useQuery(ALL_BUGS);
   if (loading || error) {
      return <h5>loading...</h5>;
   }
   return (
      <>
         <h1 className="text-center">Browse Bugs</h1>
         <Row>
            {data.bugs.map(bug => {
               return (
                  <Col lg={6}>
                     <BugCard bug={bug} key={bug._id} refetch={refetch} />
                  </Col>
               );
            })}
         </Row>
      </>
   );
};
export default Browse;
