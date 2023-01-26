import { gql } from "@apollo/client";

const GET_USER_POINTS = gql`
  query getUserPoints($id: ID!) {
    user(id: $id) {
      points {
        amount
        company {
          name
        }
      }
    }
  }
`;

export default GET_USER_POINTS;
