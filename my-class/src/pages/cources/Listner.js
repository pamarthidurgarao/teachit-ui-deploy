import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import CallEndIcon from "@material-ui/icons/CallEnd";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import StopScreenShareIcon from "@material-ui/icons/StopScreenShare";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import Peer from "peerjs";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import io from "socket.io-client";
import config from "../../config";
import { notifyUser } from "../../context/UserContext";
import useStyles from "./Styles";

export default function Listner() {
  const socket = io(config.socketEndpoint);
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const classID = params.id;
  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(true);
  const [screenShare, setScreenShare] = useState(true);
  const [stream, setStream] = useState({});
  let peer = useRef();
  let videoLayout = useRef();

  // onload
  useEffect(() => {
    initLoad();
    return () => {
      peer.disconnect();
      peer.destroy();
    };
  }, []);

  function initLoad() {
    startPeer();
    videoLayout = document.getElementById("video-layout");
    startSession();
  }

  function startSession() {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        notifyUser(classID, user._id);
        subscribe(stream);
        setStream(stream);
        const classVideo = createVideo("");
        classVideo.muted = true;
        addVideoStream(classVideo, stream);
        addNewUser(classID, stream);
        peer.on("call", function (call) {
          call.answer(stream);
          call.on("stream", function (userStream) {
            if (!document.getElementById(classID + "dis")) {
              const studentVideo = createVideo(classID + "dis");
              addVideoStream(studentVideo, userStream);
            }
          });
        });
      });
  }

  function subscribe(stream) {
    socket.on(classID, (newUser) => {
      debugger;
      if (newUser !== user._id) addNewUser(newUser, stream);
    });
  }

  function startPeer() {
    peer = new Peer(user._id, {
      port: "443",
      secure: true,
      host: config.peerEndpoint,
    });
  }

  function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    videoLayout.append(video);
  }

  function switchVideo(val) {
    setVideo(val);
    stream.getVideoTracks()[0].enabled = val;
  }

  function switchAudio(val) {
    setAudio(val);
    stream.getAudioTracks()[0].enabled = val;
  }

  function addNewUser(userId, stream) {
    let call = peer.call(userId, stream);
    if (call)
      call.on("stream", function (destinationStream) {
        if (!document.getElementById(userId)) {
          const userVideo = createVideo(userId);
          addVideoStream(userVideo, destinationStream);
        }
      });
  }

  function startSharing(val) {
    setScreenShare(val);
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
        audio: false,
      })
      .then((screenStream) => {
        debugger;
        const classVideo = createVideo("");
        addVideoStream(classVideo, screenStream);
        var call = peer.call(classID, screenStream);
        call.on("stream", function (destinationStream) {
          if (!document.getElementById(classID)) {
            const masterVideo = createVideo(classID);
            addVideoStream(masterVideo, destinationStream);
          }
        });
      });
  }
  function callEnd(type) {
    if (stream)
      stream.getTracks().forEach(function (track) {
        track.stop();
      });
    history.push("/app/contacts");
  }

  function createVideo(id) {
    const video = document.createElement("video");
    video.setAttribute("class", classes.video);
    video.setAttribute("id", id);
    return video;
  }

  return (
    <div className={classes.root}>
      <div id="video-layout"></div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow}>
            <IconButton
              color="inherit"
              onClick={() => startSharing(!screenShare)}
              edge="end"
              className={classes.controlBtn}
            >
              {screenShare ? <ScreenShareIcon /> : <StopScreenShareIcon />}
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => switchVideo(!video)}
              edge="end"
              className={classes.controlBtn}
            >
              {video ? <VideocamIcon /> : <VideocamOffIcon />}
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => switchAudio(!audio)}
              className={classes.controlBtn}
            >
              {audio ? <MicIcon /> : <MicOffIcon />}
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => callEnd(true)}
              edge="end"
              className={classes.callEndBtn}
            >
              <CallEndIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
