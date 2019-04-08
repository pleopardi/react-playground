import React from "react";
import PropTypes from "prop-types";
import { Caption, DropZone } from "@shopify/polaris";

const styles = {
  caption: {
    display: "flex",
    justifyContent: "center"
  }
};

function FileUpload({ handleSelectFile, selectedFile }) {
  return (
    <DropZone
      accept="application/vnd.ms-excel, .csv"
      allowMultiple={false}
      label="Products file"
      onDropAccepted={handleSelectFile}
    >
      <DropZone.FileUpload />
      {selectedFile && (
        <div style={styles.caption}>
          <Caption>
            {selectedFile.name} - {selectedFile.size} bytes
          </Caption>
        </div>
      )}
    </DropZone>
  );
}

FileUpload.propTypes = {
  handleSelectFile: PropTypes.func.isRequired,
  selectedFile: PropTypes.object
};

export default FileUpload;
