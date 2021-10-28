import { useQuery } from '@apollo/client';
import BugCard from '../components/BugCard';
import { ALL_BUGS } from '../utils/queries';

const Browse = () => {
   const { data, loading, error, refetch } = useQuery(ALL_BUGS);
   if (loading || error) {
      return <h5>loading...</h5>;
   }
   return (
      <>
         <h1>Browse Bugs</h1>
         {data.bugs.map(bug => {
            return <BugCard bug={bug} key={bug._id} refetch={refetch} />;
         })}
      </>
   );
};
export default Browse;
