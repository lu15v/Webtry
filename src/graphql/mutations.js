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

export const CREATE_WRITING = gql`
  mutation createWriting(
    $title: String!
    $body: String!
    $compilation: String
    $type: String
    $username: String
    $createdAt: String
  ) {
    createWriting(
      writingInput: {
        title: $title
        body: $body
        compilation: $compilation
        type: $type
        username: $username
        createdAt: $createdAt
      }
    ) {
      id
      title
      body
      compilation
      type
      createdAt
    }
  }
`;
