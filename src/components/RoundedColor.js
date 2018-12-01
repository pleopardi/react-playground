import React from "react";
import PropTypes from "prop-types";
import { RoundedContainer } from "./";

const styles = {
  content: {
    height: "100%",
    width: "100%"
  }
};

function RoundedColor({ color, disabled, containerCustomStyle, onClick }) {
  return (
    <RoundedContainer
      disabled={disabled}
      containerCustomStyle={containerCustomStyle}
      onClick={onClick}
    >
      <div style={{ ...styles.content, backgroundColor: color }} />
    </RoundedContainer>
  );
}

RoundedColor.propTypes = {
  color: PropTypes.string.isRequired,
  containerCustomStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

RoundedColor.defaultProps = {
  color: "#000000"
};

export default RoundedColor;
