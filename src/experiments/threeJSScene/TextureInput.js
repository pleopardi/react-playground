import React from "react";
import PropTypes from "prop-types";

function TextureInput({ handleUploadTexture }) {
  return <input type="file" onChange={handleUploadTexture} />;
}

TextureInput.propTypes = {
  handleUploadTexture: PropTypes.func.isRequired
};

export default TextureInput;
