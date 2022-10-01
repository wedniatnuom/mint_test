const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Listing {
    _id: ID!
    title: String!
    image: String!
    price: Float!
    description: String!
    category: Category!
  }

  type Category {
    _id: ID
    name: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Order {
    _id: ID
    purchaseDate: String
    listings: [Listing]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    user: User
    listings(category: ID, name: String): [Listing]
    listing(_id: String): Listing
    order(_id: ID!): Order
    checkout(listings: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(listings: [ID]!): Order
    updateUser(email: String, password: String): User
    updateListing(_id: ID!, quantity: Int!): Listing
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// antique(_id: ID!): Antiques
    // antiques(category: ID, name: String): [Antiques]
    // comicbook(_id: ID!): Antiques
    // comicbooks(category: ID, name: String): [ComicBooks]

 // type Antiques {
  //   _id: ID!
  //   title: String!
  //   image: String!
  //   price: Float!
  //   description: String!
  //   category: Category!
  // }

  // type ComicBooks {
  //   _id: ID!
  //   title: String!
  //   image: String!
  //   price: Float!
  //   description: String!
  //   category: Category!
  // }