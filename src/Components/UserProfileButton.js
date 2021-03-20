import { Grid, Avatar, Typography, makeStyles } from "@material-ui/core";
import LogoutButton from "./LogoutButton";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 50,
  },
  text: {
    marginLeft: 10,
  },
}));

const UserProfileButton = ({ loginUser }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Grid container item direction="row" alignItems="baseline">
        <Avatar>{loginUser.username.substr(0, 1)}</Avatar>
        <Typography variant="subtitle1" className={classes.text}>
          {loginUser.username}
        </Typography>
        <LogoutButton />
      </Grid>
    </Grid>
  );
};

export default UserProfileButton;
