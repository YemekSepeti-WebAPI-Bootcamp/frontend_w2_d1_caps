import { createMuiTheme } from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: red[500],
    },
  },
});
