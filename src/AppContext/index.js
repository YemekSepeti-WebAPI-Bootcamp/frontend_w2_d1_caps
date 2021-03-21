import { createContext, useState } from "react";

import useFetch from "../hooks/useFetch";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [categories] = useFetch(`categories`);
  const [memes, fetchMemes] = useFetch("created_memes?_expand=user");

  const [allMemes] = useFetch("https://api.imgflip.com/get_memes", {
    path: ["data", "memes"],
  });

  const initialUser = JSON.parse(localStorage.getItem("loginUser"));

  const [loginUser, setLoginUser] = useState(initialUser);

  return (
    <AppContext.Provider
      value={{
        categories,
        memes,
        fetchMemes,
        loginUser,
        setLoginUser,
        allMemes,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
