import React, { useEffect, useState } from "react";
import SingleMeme from "./Components/SingleMeme";
import Container from './Components/Container'

const styles = {
  input: {
    width: 200,
    margin: 5,
    height: 30,
    fontSize: 15
  }
}

const App = () => {
  const [memes, setMemes] = useState()
  const [selectedMeme, setSelectedMeme] = useState()

  const [text0, setText0] = useState()
  const [text1, setText1] = useState()

  const [resultMeme, setResultMeme] = useState()

  console.log({ env: process.env })


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

  console.log({ selectedMeme })

  if (resultMeme) {
    return <img
      src={resultMeme}
      width={400}
      style={{
        border: "1px solid black",
        borderRadius: 5
      }} />
  }

  if (selectedMeme) {
    return (
      <Container style={{ display: "flex" }}>
        <SingleMeme meme={selectedMeme} />
        <form onSubmit={(e) => {
          e.preventDefault()
          const postUrl = `${process.env.REACT_APP_BASE_URL}/caption_image?template_id=${selectedMeme.id}&username=${process.env.REACT_APP_USERNAME}&password=${process.env.REACT_APP_PASSWORD}&text0=${text0}&text1=${text1}`;
          fetch(postUrl).then(p => p.json()).then(response => setResultMeme(response.data.url))

        }
        } >
          <Container style={{ display: "flex", flexDirection: "column", marginTop: 100 }}>
            <input
              type="text"
              name="text0"
              placeholder="text0"
              value={text0}
              onChange={(e) => setText0(e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              name="text1"
              placeholder="text1"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              style={styles.input}
            />
            <input type="submit" value="Submit" style={styles.input} />
          </Container>
        </form>
      </Container>
    )
  }

  if (!memes)
    return <h2> Loading...</h2>

  return <Container>
    <h2>CAPS SEÇİNİZ</h2>
    {memes.map(meme => <SingleMeme key={meme.id} meme={meme} onSelect={setSelectedMeme} />)}
  </Container>;
};

export default App;
