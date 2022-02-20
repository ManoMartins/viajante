import { GraphQLClient } from "graphql-request";

const endpoint = process.env.GRAPHQL_HOST || "";

const client = new GraphQLClient("http://localhost:6969");

export default client;
