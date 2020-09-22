import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
import React from "react";

const styles = {
  menuItem: {
    marginRight: 15,
    color: "#fff",
    textDecoration: "none",
  },
};

class MenuBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <a className={classes.menuItem} href="/">
              Home
            </a>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
