import React, { useEffect, useState } from "react";

const App = () => {

  const [memes, setMemes] = useState()

  useEffect(() => {
    fetchMemes()
  }, []);

  const fetchMemes = async () => {
    try {

      const res = await fetch("https://api.imgflip.com/get_memes");
      const response = await res.json()
      console.log("fetching")
      setMemes(response.data.memes)

    } catch (error) {
      console.error(error)
    }
  }

  return <div>{memes.map(meme => <h1 key={meme.id}> {meme.name}</h1>)}</div>;
};

export default App;
