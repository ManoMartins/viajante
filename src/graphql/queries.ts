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

export const GET_FIRST_10_CITIES = gql`
  query getFirst10Cities {
    allCities(page: 1, perPage: 10) {
      id
      name
      description
      thumbnail
      places_count
      slug
    }
  }
`;
