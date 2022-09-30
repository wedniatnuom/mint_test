import { gql } from '@apollo/client';

export const QUERY_LISTINGS = gql`
  query getListings {
     listings {
      _id
      title
      image
      price
      description
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($listings: [ID]!) {
    checkout(listings: $listings) {
      session
    }
  }
`;

export const QUERY_ALL_LISTINGS = gql`
  {
    listings {
      _id
      title
      image
      price
      description
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchaseDate
        listings {
            _id
            title
            price
            description
          quantity
          image
        }
      }
    }
  }
`;
