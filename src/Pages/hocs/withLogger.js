import React from "react";

const withLogger = (WrappedComponent) => {
  return class HOC extends React.Component {
    componentDidMount() {
      console.log(WrappedComponent.name, "mounted");
    }

    componentWillUnmount() {
      console.log(WrappedComponent.name, "unmounted");
    }

    render() {
      const myProp = "deneme property";

      return <WrappedComponent myProp={myProp} />;
    }
  };
  
};

export default withLogger;
