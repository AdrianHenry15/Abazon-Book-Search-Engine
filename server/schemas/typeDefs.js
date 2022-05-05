const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Books]
},
type Book {
    _id: ID
    authors: String
    description: String!
    image: String
    link: String
    title: String!
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    
}

`