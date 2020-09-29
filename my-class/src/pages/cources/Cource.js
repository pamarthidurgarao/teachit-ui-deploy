import { Button } from "@material-ui/core";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

export default function Cource() {
  const params = useParams();
  const history = useHistory();
  const classId = params.id;

  function startClass() {
    history.push("/app/class/" + classId);
  }

  function joinClass() {
    history.push("/app/class2/" + classId);
  }
  return (
    <div style={{ width: "100%" }}>
      <h2>Cource</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          startClass();
        }}
      >
        Start Class
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          joinClass();
        }}
      >
        Join Class
      </Button>
    </div>
  );
}
