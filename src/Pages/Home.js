import { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import TopAppBar from "../Components/TopAppBar";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [memes] = useFetch("created_memes?_expand=user");

  return (
    <Layout>
      <span>{JSON.stringify(memes)}</span>
    </Layout>
  );
};

export default Home;
