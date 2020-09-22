import { IconButton } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
import CallEndIcon from "@material-ui/icons/CallEnd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUserById } from "../../context/UserContext";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
  },
  callEnd: {
    backgroundColor: "#eb0905",
    color: "#fff",
    marginLeft: "50px",
  },
  callAnswer: {
    backgroundColor: "#237301",
    color: "#fff",
    float: "right",
    marginRight: "50px",
  },
  callImg: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#040e46",
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    margin: "0 auto",
    color: "#ffffff",
  },
  callText: { position: "relative", top: "30%", fontSize: "xx-large" },
  callName: {
    textAlign: "center",
  },
}));

export default function CallModal({ callId, playing, toggle }) {
  const classes = useStyles();
  const history = useHistory();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (callId && callId.status) getUserById(callId.status, setUser);
    return () => {};
  }, [callId]);

  const handleClose = () => {
    setOpen(false);
  };

  function callEnd() {
    setOpen(false);
    toggle();
  }
  function answer() {
    setOpen(false);
    toggle();
    history.push("/app/call/" + callId.status);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.callImg}>
        <span className={classes.callText}>
          {" "}
          {user
            ? user.firstName.slice(0, 1).toUpperCase() +
              user.lastName.slice(0, 1).toUpperCase()
            : ""}
        </span>
      </div>
      <div className={classes.callName}>
        <h2 id="simple-modal-title">
          {user ? user.firstName + " " + user.lastName : ""}
        </h2>
        <p>Is calling...</p>
      </div>
      <IconButton
        edge="end"
        aria-label="end"
        className={classes.callEnd}
        onClick={() => callEnd()}
      >
        <CallEndIcon />
      </IconButton>
      <IconButton
        edge="end"
        aria-label="answer"
        className={classes.callAnswer}
        onClick={() => answer()}
      >
        <CallIcon />
      </IconButton>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
