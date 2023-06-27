const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String
    username: String!
    age: Int!
    height: Float!
    nationality: Nationality!
    friends: [Friend]
    favoriteMovies: [Movie]
  }

  type Friend {
    name: String
    age: Int
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String
    username: String!
    age: Int!
    height: Float
    nationality: Nationality = USA
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    UpdateUser(input: UpdateUsernameInput!): User!
  }

  enum Nationality {
    USA
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;

module.exports = { typeDefs };
