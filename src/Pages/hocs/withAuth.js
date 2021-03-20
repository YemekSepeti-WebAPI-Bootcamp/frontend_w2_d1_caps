import Layout from "../../Components/Layout";

const withAuth = (WrappedComponent) => () => {
  const user = localStorage.getItem("loginUser");
  if (!user)
    return (
      <Layout>
        <h2>Authorization Error</h2>
      </Layout>
    );
  return <WrappedComponent loginUser={user} />;
};

export default withAuth;
