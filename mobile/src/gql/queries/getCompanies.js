const { gql } = require("@apollo/client");

const GET_COMPANIES = gql`
  query {
    companies {
      name
      address {
        streetName
        number
        zipCode
        city
      }
    }
  }
`;

export default GET_COMPANIES;
