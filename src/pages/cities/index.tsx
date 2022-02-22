import { NextPage } from "next";
import client from "../../graphql/client";
import { GET_ALL_CITIES } from "../../graphql/queries";
import { CitiesTemplate } from "../../templates/Cities";

type Cities = {
  allCities: any;
} & NextPage;

export default function Cities({ allCities }: Cities) {
  return <CitiesTemplate />;
}

export const getStaticProps = async () => {
  const { allCities } = await client.request<any>(GET_ALL_CITIES);

  console.log(allCities);

  return {
    props: {},
  };
};
