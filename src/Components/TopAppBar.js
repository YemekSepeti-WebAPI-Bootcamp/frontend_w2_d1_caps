import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import UserProfileButton from "./UserProfileButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopAppBar() {
  const classes = useStyles();
  const { loginUser } = useAppContext();

  console.log({ loginUser });

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Kod Caps
          </Typography>
          <Link to={{ pathname: "/" }}>
            <Button color="inherit">Anasayfa</Button>
          </Link>
          <Link to={{ pathname: "/about-us" }}>
            <Button color="inherit">Hakkımızda</Button>
          </Link>
          {loginUser && (
            <Link to={{ pathname: "/meme-generator" }}>
              <Button color="inherit">Meme Generator</Button>
            </Link>
          )}
          {loginUser && (
            <Link to={{ pathname: "/create-meme" }}>
              <Button color="inherit">Create Meme</Button>
            </Link>
          )}

          {!loginUser ? (
            <Link to={{ pathname: "/login" }}>
              <Button color="inherit">Login</Button>
            </Link>
          ) : (
            <UserProfileButton loginUser={loginUser} />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
