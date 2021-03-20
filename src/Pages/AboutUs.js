import Layout from "../Components/Layout";
import withAuth from "./hocs/withAuth";
import withLayout from "./hocs/withLayout";

const AboutUs = () => {
  return <h2>About Us</h2>;
};

export default withAuth(withLayout(AboutUs));
