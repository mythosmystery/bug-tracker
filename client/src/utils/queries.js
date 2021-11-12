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
export const SEARCH_BUGS = gql`
   query bugsBySoftware($softwareTitle: String!) {
      bugsBySoftware(softwareTitle: $softwareTitle) {
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
`;
export const ALL_BUGS = gql`
   query bugs {
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
`;
