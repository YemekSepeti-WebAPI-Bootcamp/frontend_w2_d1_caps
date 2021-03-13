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
