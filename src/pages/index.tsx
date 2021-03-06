import client from "../graphql/client";
import { GET_ALL_CITIES, GET_FIRST_10_CITIES } from "../graphql/queries";
import { HomeTemplate } from "../templates/Home";

type HomeProps = {
  allCities: any;
};

export default function Home({ allCities }: HomeProps) {
  return <HomeTemplate cities={allCities} />;
}

export const getStaticProps = async () => {
  const { allCities } = await client.request<any>(GET_FIRST_10_CITIES);

  return {
    props: {
      allCities,
    },
  };
};
