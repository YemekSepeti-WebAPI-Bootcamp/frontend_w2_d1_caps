import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("useEffect for counter 1");
    // chat uygulaması için backend ile soket bağlantısı kurduk.
    return () => {
      console.log("clean");
      //chat bağlantısını disconnect et
    };
  }, []);

  useEffect(() => {
    console.log("useEffect for counter 2");
  }, [counter2]);

  console.log("rerender");

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Artır</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Azalt</button>
      <br />
      <br />
      <br />
      <button onClick={() => setCounter2(counter2 + 1)}>Artır</button>
      <h1>{counter2}</h1>
      <button onClick={() => setCounter2(counter2 - 1)}>Azalt</button>
    </div>
  );
};

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       memes: null,
//       city: 34,
//     };

//     console.log("constructor");
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedFromState", props, state);
//     return { ...props, ...state };
//   }

//   componentDidMount() {
//     fetch()
//     this.setState({ deneme: "component did mount" });
//     console.log("comonentDidMount");
//   }

//   componentWillUnmount(){

//   }

//   render() {
//     console.log("render", this.state);
//     return <div className="App">{this.state.deneme}</div>;
//   }
// }

export default App;
