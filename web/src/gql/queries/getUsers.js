const { gql } = require("@apollo/client");

const GET_USERS = gql`
  query {
    users {
      id
      userName
      firstName
      lastName
      email
    }
  }
`;

export default GET_USERS;