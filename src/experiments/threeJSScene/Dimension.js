import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    display: "flex"
  }
};
function Dimension({ classes, handleDimensionChange, label }) {
  return (
    <div className={classes.container}>
      <h1>{label}</h1>
      <input type="text" onChange={handleDimensionChange} />
    </div>
  );
}

Dimension.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired
  }).isRequired,
  handleDimensionChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default withStyles(styles)(Dimension);
