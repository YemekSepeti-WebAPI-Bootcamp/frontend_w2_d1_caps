import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import "./index.css";
import App from "./App";
import Login from "./Login";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>

        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
