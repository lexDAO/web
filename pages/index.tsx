import type { NextPage } from "next";
import Layout from "~/layout";

const Home: NextPage = () => {
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <h1 className="text-3xl font-bold underline">Home</h1>
    </Layout>
  );
};

export default Home;