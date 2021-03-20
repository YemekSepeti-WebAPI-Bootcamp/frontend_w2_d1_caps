import { Grid, Tooltip, withStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { withRouter } from "react-router";
import useAppContext from "../hooks/useAppContext";

const LargeTooltip = withStyles((theme) => ({
  tooltip: {
    fontSize: 23,
    background: theme.palette.primary.main,
  },
}))(Tooltip);

const LogoutButton = ({ history }) => {
  const { setLoginUser } = useAppContext();
  return (
    <LargeTooltip title="LOGOUT">
      <ExitToAppIcon
        style={{ alignSelf: "center", marginLeft: 20 }}
        onClick={() => {
          // local storage temizle
          // context loginUser temizle
          // logine redirect

          localStorage.removeItem("loginUser");
          setLoginUser(null);
          history.push("/login");
          
        }}
      />
    </LargeTooltip>
  );
};

export default withRouter(LogoutButton);
