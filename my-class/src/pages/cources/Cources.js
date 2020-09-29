import { Box, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cources() {
  const classes = useStyles();
  const history = useHistory();
  const elements = [
    "8th Class Maths",
    "8th Class Science",
    "8th Class English",
    "8th Class Telugu",
  ];

  function open() {
    history.push("/app/cource/100");
  }
  return (
    <div style={{ width: "100%" }}>
      <h2>Cources</h2>
      <Box display="flex" flexWrap="wrap" p={1} m={1}>
        {elements.map((value, index) => {
          return (
            <Card className={classes.root} variant="outlined" key={index}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {value}
                </Typography>
                <Typography variant="h5" component="h2">
                  ABC
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    open();
                  }}
                >
                  Click
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </div>
  );
}
