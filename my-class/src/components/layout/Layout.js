import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import io from "socket.io-client";
// context
import { useLayoutState } from "../../context/LayoutContext";
import Calls from "../../pages/calls/Calls";
import DailCall from "../../pages/calls/DailCall";
import ReceiveCall from "../../pages/calls/ReceiveCall";
import Contacts from "../../pages/contacts/Contacts";
import Cource from "../../pages/cources/Cource";
import Cources from "../../pages/cources/Cources";
import Listner from "../../pages/cources/Listner";
import Teacher from "../../pages/cources/Teacher";
import Messages from "../../pages/messages/Messages";
// components
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import CallModal from "./CallModal";
// styles
import useStyles from "./styles";
const ENDPOINT = "https://teachit-api.herokuapp.com";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.loop = true;
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      setPlaying(true);
    });
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const style = {
  height: window.innerHeight - 112 + "px",
};
function Layout(props) {
  const [playing, toggle] = useAudio("telephone_ring.mp3");
  const socket = io(ENDPOINT);
  var classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [callId, setCallId] = React.useState();
  const [userId, setUserID] = React.useState(10);
  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    socket.on(user._id, (toId) => {
      console.log(open);
      setOpen(true);
      console.log(open);
      toggle();
      setCallId(toId);
    });
  }, [userId]);
  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div style={style}>
            {/* <div className={classes.fakeToolbar} /> */}
            <Switch>
              <Route path="/app/calls" component={Calls} />
              <Route path="/app/call/:id" component={ReceiveCall} />
              <Route path="/app/call2/:id" component={DailCall} />
              <Route path="/app/messages" component={Messages} />
              <Route path="/app/contacts" component={Contacts} />
              <Route path="/app/cources" component={Cources} />
              <Route path="/app/cource/:id" component={Cource} />
              <Route path="/app/class/:id" component={Teacher} />
              <Route path="/app/class2/:id" component={Listner} />
            </Switch>
          </div>
        </div>
        {open ? (
          <CallModal
            callId={callId}
            setOpen={setOpen}
            open={open}
            toggle={toggle}
          />
        ) : (
          ""
        )}
      </>
    </div>
  );
}

export default withRouter(Layout);
