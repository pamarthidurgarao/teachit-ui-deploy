import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import CallEndIcon from "@material-ui/icons/CallEnd";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import Peer from "peerjs";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    float: "right",
    position: "absolute",
    right: "30px",
  },
  controlBtn: {
    margin: "5px",
  },
  callEndBtn: {
    margin: "5px",
    backgroundColor: "red",
  },
  video: {
    height: window.innerHeight - 112 + "px",
    width: (window.innerWidth - 74) / 2 + "px",
  },

  videoMobile: {
    height: (window.innerHeight - 112) / 2 + "px",
    width: window.innerWidth + "px",
  },
}));

export default function ReceiveCall() {
  const history = useHistory();
  const params = useParams();
  const callId = params.id;
  const classes = useStyles();
  const [stream, setStream] = useState();
  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(true);
  const [userId] = useState(0);
  let videoGrid;
  const user = JSON.parse(localStorage.getItem("user"));
  const peer = new Peer(user._id, {
    port: "443",
    secure: true,
    host: "school-peer.herokuapp.com",
  });

  React.useEffect(() => {
    videoGrid = document.getElementById("video-grid");
    console.log("hai");
    loadMedia();
    return () => {
      if (stream)
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
    };
  }, [userId]);

  function switchVideo(val) {
    setVideo(val);
    stream.getVideoTracks()[0].enabled = val;
  }
  function switchAudio(val) {
    setAudio(val);
    stream.getAudioTracks()[0].enabled = val;
  }
  function isMobile() {
    return (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
  }
  function callEnd() {
    stream.getTracks().forEach(function (track) {
      track.stop();
    });
    history.push("/app/contacts");
  }
  function loadMedia() {
    const myVideo = document.createElement("video");
    myVideo.setAttribute(
      "class",
      isMobile() ? classes.videoMobile : classes.video
    );
    myVideo.muted = true;
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        // setControl(true);
        console.log("Call received");
        setStream(stream);
        addVideoStream(myVideo, stream);
        setTimeout(() => {
          var call = peer.call(callId, stream);
          console.log("Calling to the diler {}", call);
          debugger;
          if (call)
            call.on("stream", function (destinationStream) {
              console.log("source1 stream connected");
              if (!document.getElementById(callId)) {
                console.log("source1 stream adding to the console");
                const myVideo = document.createElement("video");
                myVideo.setAttribute(
                  "class",
                  isMobile() ? classes.videoMobile : classes.video
                );
                myVideo.setAttribute("id", callId);
                addVideoStream(myVideo, destinationStream);
              }
            });
        }, 2000);
      });
  }

  function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    videoGrid.append(video);
  }

  return (
    <div>
      <div className="row" container>
        <div id="video-grid" className=""></div>
      </div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow}>
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
              onClick={() => callEnd()}
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
