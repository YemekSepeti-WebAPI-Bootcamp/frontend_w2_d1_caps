import React from "react";
import ReactDOM from "react-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";

import "./index.css";
import Routes from "./Routes";

import { theme } from "./Constants";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
