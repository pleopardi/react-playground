import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dimension from "./Dimension";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  }
};

function DimensionsPanel({ classes, dimensions }) {
  return (
    <div className={classes.container}>
      {dimensions.map(dimension => (
        <Dimension key={dimension.label} {...dimension} />
      ))}
    </div>
  );
}

DimensionsPanel.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired
  }).isRequired,
  dimensions: PropTypes.arrayOf(
    PropTypes.shape({
      handleDimensionChange: PropTypes.func.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default withStyles(styles)(DimensionsPanel);
