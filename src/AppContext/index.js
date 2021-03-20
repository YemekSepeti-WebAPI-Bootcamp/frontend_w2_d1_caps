import { createContext, useState } from "react";

import useFetch from "../hooks/useFetch";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [categories] = useFetch(`categories`);
  const [memes] = useFetch("created_memes?_expand=user");

  const initialUser = JSON.parse(localStorage.getItem("loginUser"));

  const [loginUser, setLoginUser] = useState(initialUser);

  return (
    <AppContext.Provider value={{ categories, memes, loginUser, setLoginUser }}>
      {props.children}
    </AppContext.Provider>
  );
};
