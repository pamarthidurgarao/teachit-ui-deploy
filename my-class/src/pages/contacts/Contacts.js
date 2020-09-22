import {
  Avatar,
  Backdrop,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Call, Message, VideoCall } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { getContacts } from "../../context/UserContext";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Contacts() {
  const classes = useStyles();
  const history = useHistory();
  const [dense] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [userId] = React.useState(0);
  React.useEffect(() => {
    getContacts(setData, setLoading);
  }, [userId]);

  function call(id) {
    history.push("/app/call2/" + id);
  }
  const handleClose = () => {
    // setLoading(false);
  };
  return (
    <>
      <h1>Contacts</h1>
      <div className={classes.demo}>
        <List dense={dense}>
          {data.length > 0
            ? data.map(({ firstName, lastName, email, _id }) => (
                <ListItem key={_id}>
                  <ListItemAvatar>
                    <Avatar>
                      <Message />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={firstName + " " + lastName}
                    secondary={email}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="audio"
                      onClick={() => call(_id)}
                    >
                      <Call />
                    </IconButton>
                    <IconButton edge="end" aria-label="video">
                      <VideoCall />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            : []}
        </List>
      </div>
      <Backdrop
        className={classes.backdrop}
        open={loading}
        onClick={handleClose}
      >
        <CircularProgress />
      </Backdrop>
    </>
  );
}
