import Layout from "../Components/Layout";

const withLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
};

export default withLayout;
