import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      books {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
