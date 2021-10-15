const { gql } = require('apollo-server-express');

const typeDefs = gql`
   input BugInput {
      description: String
      replicate: String
      errorMessage: String
      softwareTitle: String
      version: String
      status: String
   }
   type User {
      _id: ID
      username: String
      email: String
      bugs: [Bug]
   }
   type Bug {
      _id: ID
      description: String
      replicate: String
      errorMessage: String
      softwareTitle: String
      version: String
      status: String
      date: Float
      reportedBy: User
   }
   type Auth {
      token: ID!
      user: User
   }

   type Query {
      bugs: [Bug]!
      bug(bugId: ID!): Bug
      bugsByUser(userId: ID!): [Bug]
      bugsBySoftware(softwareTitle: String!): [Bug]

      users: [User]!
      user(userId: ID!): User
      me: User
   }
   type Mutation {
      addBug(bug: BugInput!): Bug
      removeBug(bugId: ID!): String

      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
   }
`;
module.exports = typeDefs;
