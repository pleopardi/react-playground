import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Canvas } from "./";
import { pngAsset, svgAsset, svgString } from "./";
import svgFile from "./assets/icon-star.svg";
import { svgStringToBase64DataUrl, svgStringToDataUrl } from "./";

const styles = {
  container: {
    height: 500,
    width: 500,
    border: "2px dotted"
  }
};

function App({ classes }) {
  const base64DataUrl = svgStringToBase64DataUrl(svgString);
  const dataUrl = svgStringToDataUrl(svgString);

  return (
    <div className={classes.container}>
      <Canvas
        pngAsset={pngAsset}
        base64DataUrl={base64DataUrl}
        dataUrl={dataUrl}
        svgAsset={svgAsset}
        svgFile={svgFile}
        svgString={svgString}
      />
    </div>
  );
}

export default withStyles(styles)(App);
