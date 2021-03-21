import { useEffect, useState } from "react";

const useFetch = (endpoint, options) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let url = endpoint.startsWith("http")
      ? endpoint
      : `${process.env.REACT_APP_BASE_URL}/${endpoint}`;

    const res = await fetch(url);
    const response = await res.json();

    if (options && options.path) {
      let dataWillSet = response;

      for (let i = 0; i < options.path.length; i++) {
        dataWillSet = dataWillSet[options.path[i]];
        // data.data
        // data.data.memes
      }

      setData(dataWillSet);
    } else setData(response);
  };

  return [data, fetchData];
};

export default useFetch;
