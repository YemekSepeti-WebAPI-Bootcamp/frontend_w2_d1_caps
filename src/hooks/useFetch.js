import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/${endpoint}`);
    const response = await res.json();

    setData(response);
  };

  return [data];
};

export default useFetch;
