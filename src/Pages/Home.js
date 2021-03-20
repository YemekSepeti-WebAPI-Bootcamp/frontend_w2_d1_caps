import Skeleton from "@material-ui/lab/Skeleton";
import { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import useFetch from "../hooks/useFetch";

import MemeCard from "../Components/MemeCard";

const Home = () => {
  const [memes] = useFetch("created_memes?_expand=user");

  if (!memes)
    return (
      <Layout>
        <div>
          {[...Array(3).keys()].map((p) => (
            <div key={p}>
              <Skeleton variant="text" width={500} />
              <Skeleton variant="circle" width={50} height={50} />
              <Skeleton
                variant="rect"
                width={500}
                height={500}
                style={{ margin: 10, borderRadius: 8 }}
              />
            </div>
          ))}
        </div>
      </Layout>
    );

  return (
    <Layout>
      <span>
        {memes.map((meme) => {
          return <MemeCard key={meme.id} meme={meme} />;
        })}
      </span>
    </Layout>
  );
};

export default Home;
