import client from "../graphql/client";
import { GET_ALL_CITIES } from "../graphql/queries";
import { HomeTemplate } from "../templates/Home";

type HomeProps = {
  allCities: any;
};

export default function Home({ allCities }: HomeProps) {
  return <HomeTemplate cities={allCities} />;
}

export const getStaticProps = async () => {
  const { allCities } = await client.request<any>(GET_ALL_CITIES);

  return {
    props: {
      allCities,
    },
  };
};
