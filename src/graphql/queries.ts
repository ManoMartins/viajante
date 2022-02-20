import { gql } from "graphql-request";

export const GET_ALL_CITIES = gql`
  query getAllCities {
    allCities {
      id
      name
      description
      thumbnail
      places_count
      slug
    }
  }
`;
