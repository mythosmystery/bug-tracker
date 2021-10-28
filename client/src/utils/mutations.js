import { gql } from '@apollo/client';
export const UPDATE_BUG = gql`
   mutation updateBug($bug: BugInput!) {
      updateBug(bug: $bug) {
         _id
         username
         email
         bugs {
            _id
            description
            replicate
            errorMessage
            softwareTitle
            version
            date
            status
            reportedBy {
               _id
               username
            }
         }
      }
   }
`;
export const REMOVE_BUG = gql`
   mutation removeBug($bugId: ID!) {
      removeBug(bugId: $bugId) {
         _id
         username
         email
         bugs {
            _id
            description
            replicate
            errorMessage
            softwareTitle
            version
            date
            status
            reportedBy {
               _id
               username
            }
         }
      }
   }
`;
export const ADD_BUG = gql`
   mutation addBug($bug: BugInput!) {
      addBug(bug: $bug) {
         _id
         username
         email
         bugs {
            _id
            description
            replicate
            errorMessage
            softwareTitle
            version
            date
            status
            reportedBy {
               _id
               username
            }
         }
      }
   }
`;
export const LOGIN_USER = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
         user {
            _id
            username
            email
            bugs {
               _id
               description
               replicate
               errorMessage
               softwareTitle
               version
               date
               status
               reportedBy {
                  _id
                  username
               }
            }
         }
      }
   }
`;
export const ADD_USER = gql`
   mutation addUser($username: String!, $email: String!, $password: String!) {
      addUser(username: $username, email: $email, password: $password) {
         token
         user {
            _id
            username
            email
            bugs {
               _id
               description
               replicate
               errorMessage
               softwareTitle
               version
               date
               status
               reportedBy {
                  _id
                  username
               }
            }
         }
      }
   }
`;
