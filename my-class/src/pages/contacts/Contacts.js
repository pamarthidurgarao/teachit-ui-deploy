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
    <div className="container-fluid main-content-space">
      <h1 className="mt-0 pt-0">Contacts</h1>
      <ul className="list-1 pt-2">
        {data.length > 0
            ? data.map(({ firstName, lastName, email, _id }) => (
        <li>
          <div className="box-1 position-relative">
            <span className="name">{firstName} {lastName}</span>
            <span className="email">{email}</span>
            <div className="c-btn-group">
            <button type="button" className="custom-btn mx-0" onClick={() => call(_id)}><img src={process.env.PUBLIC_URL + '/images/oncall.png'}/></button>
            <button type="button" className="custom-btn mr-0 ml-1"><img src={process.env.PUBLIC_URL + '/images/video-open.png'}/></button>
          </div>
          </div>
          </li> ))
            : []}
      </ul>
     
      <Backdrop
        className={classes.backdrop}
        open={loading}
        onClick={handleClose}
      >
        <CircularProgress />
      </Backdrop>
    </div>
  );
}
