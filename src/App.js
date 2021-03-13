import React, { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {
    const memes = fetch("https://api.imgflip.com/get_memes");
    console.log(memes);
  }, []);

  return <div></div>;
};

export default App;
