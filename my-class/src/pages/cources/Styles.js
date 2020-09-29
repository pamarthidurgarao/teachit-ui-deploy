import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
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
  // video: {
  //   height: window.innerHeight - 112 + "px",
  //   width: (window.innerWidth - 74) / 2 + "px",
  // },

  // videoMobile: {
  //   height: (window.innerHeight - 112) / 2 + "px",
  //   width: window.innerWidth + "px",
  // },
}));
