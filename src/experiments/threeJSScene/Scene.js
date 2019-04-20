import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  sceneContainer: {
    height: 800,
    width: 1200
  }
};

function Scene({ classes, sceneRef }) {
  return <div className={classes.sceneContainer} ref={sceneRef} />;
}

Scene.propTypes = {
  classes: PropTypes.shape({
    sceneContainer: PropTypes.string.isRequired
  }).isRequired,
  sceneRef: PropTypes.object.isRequired
};

export default withStyles(styles)(Scene);
