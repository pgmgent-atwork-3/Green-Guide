const { gql } = require("@apollo/client");

const GET_COMPANY = gql`
  query getCompany($id: ID!) {
    company(id: $id) {
      name
      summary
      established
      openingHours
      contactPerson {
        firstName
        lastName
        email
        phoneNumber
      }
      address {
        streetName
        number
        zipCode
        city
        lat
        long
      }
      labels {
        label {
          name
        }
        motivation
        approved
      }
      sectors {
        name
      }
      categories {
        name
      }
      rewards {
        name
        description
        points
      }
    }
  }
`;

export default GET_COMPANY;
