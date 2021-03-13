import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      memes: null,
    };

    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedFromState", props, state);
    return props;
  }

  componentDidMount() {
    // fetch()
    // this.setState({ deneme: "component did mount" });
    console.log("comonentDidMount");
  }

  render() {
    // console.log("render", this.state);
    return <div className="App">{this.state.deneme}</div>;
  }
}

export default App;
