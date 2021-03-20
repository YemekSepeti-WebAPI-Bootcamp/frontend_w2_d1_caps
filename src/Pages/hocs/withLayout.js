import Layout from "../../Components/Layout";

const withLayout = (WrappedComponent) => {
  return () => {
    return (
      <Layout>
        <WrappedComponent />
      </Layout>
    );
  };
};

export default withLayout;
