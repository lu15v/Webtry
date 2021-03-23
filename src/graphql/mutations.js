import gql from "graphql-tag";

export const UPDATE_VIEWS = gql`
  mutation updateViews($writingId: ID!) {
    updateViews(writingId: $writingId)
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      firstName
      token
    }
  }
`;