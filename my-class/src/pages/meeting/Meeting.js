import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import StopScreenShareIcon from "@material-ui/icons/StopScreenShare";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import io from "socket.io-client";
import styled from "styled-components";
import config from "../../config";
import useStyles from "./Styles";

const Container = styled.div`
    padding: 20px;
    display: flex;
    height: 100vh;
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
`;

const StyledVideo = styled.video`
    height: 40%;
    width: 50%;
`;

const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <StyledVideo playsInline autoPlay ref={ref} />
    );
}


const videoConstraints = {
    // height: window.innerHeight / 2,
    width: window.innerWidth / 2
};
export default function Meeting(props) {
    const user = JSON.parse(localStorage.getItem("user"));
    const classes = useStyles();
    const [peers, setPeers] = useState([]);

    const [audio, setAudio] = useState(true);
    const [video, setVideo] = useState(true);
    const [screenShare, setScreenShare] = useState(true);
    const [stream, setStream] = useState({});
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const roomID = "5faa67a07e77455ae4ec94ba";

    useEffect(() => {
        socketRef.current = io.connect(config.socketEndpoint);
        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
            userVideo.current.srcObject = stream;
            socketRef.current.emit("join room", roomID, user._id);
            socketRef.current.on("all users", users => {
                const peers = [];
                users.forEach(userID => {
                    const peer = createPeer(userID.socketId, socketRef.current.id, stream);
                    peersRef.current.push({
                        peerID: userID.socketId,
                        peer,
                    })
                    peers.push(peer);
                })
                setPeers(peers);
            })

            socketRef.current.on("user joined", payload => {
                const peer = addPeer(payload.signal, payload.callerID, stream);
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                })

                setPeers(users => [...users, peer]);
            });

            socketRef.current.on("receiving returned signal", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.id);
                item.peer.signal(payload.signal);
            });
        })
    }, []);

    function switchVideo(val) {
        setVideo(val);
        userVideo.current.srcObject.getVideoTracks()[0].enabled = val;
    }

    function switchAudio(val) {
        setAudio(val);
        userVideo.current.srcObject.getAudioTracks()[0].enabled = val;
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
                // let call = peerScreen.call("5f60b47d07f3730004d08150", screenStream);
                // peerScreen.call("5f674d70a436830004cabdbe", screenStream);
            });
    }

    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })

        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        })

        peer.signal(incomingSignal);

        return peer;
    }

    return (
        <div className="container-fluid p-0">
            <div className="row m-0">
                <div className="col-6 p-0">
                    <StyledVideo muted ref={userVideo} autoPlay playsInline />
                </div>
                {peers.map((peer, index) => {
                    return (
                        <div className="col-6 p-0">
                            <Video key={index} peer={peer} />
                        </div>
                    );
                })}
            </div>
            <footer>

                <button type="button" className="custom-btn" onClick={() => switchAudio(!audio)}><img src={process.env.PUBLIC_URL + '/images/chat.png'} /></button>
                <button type="button" className="custom-btn" onClick={() => switchAudio(!audio)}><img src={process.env.PUBLIC_URL + '/images/muted.png'} /></button>
                <button type="button" className="custom-btn" onClick={() => startSharing(!screenShare)} ><img src={process.env.PUBLIC_URL + '/images/monitoring.png'} /></button>
                <button type="button" className="custom-btn" onClick={() => switchVideo(!video)}><img src={process.env.PUBLIC_URL + '/images/video-open.png'} /></button>
                <button type="button" className="custom-btn"><img src={process.env.PUBLIC_URL + '/images/oncall.png'} /></button>
            </footer>
        </div>
    );
}
