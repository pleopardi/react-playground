import React from "react";
import PropTypes from "prop-types";

const styles = {
  innerContainerStyle: {
    borderRadius: "50%",
    height: 45,
    overflow: "hidden",
    width: 45
  }
};

function RoundedContainer({
  children,
  disabled,
  containerCustomStyle,
  onClick
}) {
  const handleClick =
    !Boolean(disabled) && Boolean(onClick) ? onClick : undefined;

  return (
    <div
      style={{
        ...styles.innerContainerStyle,
        ...containerCustomStyle
      }}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

RoundedContainer.propTypes = {
  children: PropTypes.node.isRequired,
  containerCustomStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

RoundedContainer.defaultProps = {
  disabled: false
};

export default RoundedContainer;
