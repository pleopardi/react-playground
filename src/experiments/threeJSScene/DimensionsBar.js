import React from "react";

function DimensionsBar({ handleSetDimensions }) {
  return (
    <input
      type="text"
      onChange={event => {
        const value = parseInt(event.target.value, 10);
        handleSetDimensions(value, value, value);
      }}
    />
  );
}

export default DimensionsBar;
