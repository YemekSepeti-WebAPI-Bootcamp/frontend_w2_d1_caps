import { makeStyles } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  console.log({ theme });
  return {
    root: {
      maxWidth: 600,
      padding: 30,
    },
    title: {},
    memeCardHeaderText: {
      marginLeft: 10,
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    memeImg: {
      maxWidth: 500,
      border: "1px solid #aaa",
      borderRadius: 8,
    },
  };
});
