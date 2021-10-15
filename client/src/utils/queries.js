import { gql } from '@apollo/client';
export const GET_ME = gql`
   query me {
      me {
         _id
         email
         username
         bugs {
            _id
            description
            replicate
            errorMessage
            softwareTitle
            version
            status
            date
            reportedBy {
               _id
               username
            }
         }
      }
   }
`;
