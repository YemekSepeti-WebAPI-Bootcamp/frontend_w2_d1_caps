import Layout from "../Components/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Grid } from "@material-ui/core";
import useAppContext from "../hooks/useAppContext";
import { withRouter } from "react-router";
import withLogger from "../hocs/withLogger";

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const Login = ({ history, myProp }) => {
  // ! form tasarla
  // ! kullanıcı varsa login yapılacak
  // kullanıcıyı localstorage'e koyacağız
  // sayfa yenilenince login olduğunu bu şekilde anlayacağız
  // ! eğer usename db'de yoksa, yeni kullanıcı oluşturacağız
  // ! password yanlışsa alert ile uyarı vereceğiz

  console.log("Login Component", { myProp });

  const { setLoginUser } = useAppContext();

  const loginSucceed = (user) => {
    localStorage.setItem("loginUser", JSON.stringify(user));
    setLoginUser(user);
    history.push("/");
  };

  const loginAction = async ({ username, password }) => {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/users?username=${username}`
    );
    const users = await res.json();
    const userExist = users.length > 0;
    if (userExist) {
      const user = users[0];
      console.log({ user });

      const passwordCorrect = user.password === password;
      if (!passwordCorrect) {
        alert("Password is wrong");
      } else {
        loginSucceed(user);
      }
    } else {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      const createdUser = await res.json();
      loginSucceed(createdUser);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginAction(values);
    },
  });

  //   console.log({ formik });

  return (
    <Layout hideSidebar>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ height: "70vh" }}
      >
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit} style={{ maxWidth: 500 }}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            style={{ marginTop: 10 }}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            style={{ marginTop: 10 }}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            style={{ marginTop: 10 }}
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Layout>
  );
};

export default withRouter(Login);
