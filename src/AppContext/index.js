import { createContext } from "react";

import useFetch from "../hooks/useFetch";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [categories] = useFetch(`categories`);
  const [memes] = useFetch("created_memes?_expand=user");

  return (
    <AppContext.Provider value={{ categories, memes }}>
      {props.children}
    </AppContext.Provider>
  );
};
