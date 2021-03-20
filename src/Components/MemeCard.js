import {
  Avatar,
  Grid,
  IconButton,
  Typography,
  Badge,
  Divider,
} from "@material-ui/core";
import { useStyles } from "../Constants/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
const MemeCard = ({ meme }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      {/* header */}
      <Grid item container direction="row" alignItems="baseline">
        <Avatar className={classes.orange}>
          {meme.user.username.substr(0, 1)}
        </Avatar>
        <Typography className={classes.memeCardHeaderText}>
          {meme.user.username}
        </Typography>
        <FiberManualRecordIcon
          style={{ fontSize: 9, color: `#999` }}
          className={classes.memeCardHeaderText}
        />
        <Typography className={classes.memeCardHeaderText}>4h</Typography>
      </Grid>
      {/* media */}
      <Grid item>
        <h2 className={classes.title}>{meme.title}</h2>
        <img src={meme.url} className={classes.memeImg}></img>
      </Grid>
      <Grid item>
        <IconButton>
          <Badge badgeContent={meme.likes.length} color="error">
            <ThumbUpAltOutlinedIcon />
          </Badge>
        </IconButton>

        <IconButton>
          <Badge badgeContent={meme.dislikes.length} color="error">
            <ThumbDownAltOutlinedIcon />
          </Badge>
        </IconButton>
      </Grid>
      <Divider />
    </Grid>
  );
};

export default MemeCard;
