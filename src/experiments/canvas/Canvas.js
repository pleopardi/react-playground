import React from "react";
import { Stage as StageRK, Layer as LayerRK } from "react-konva";
import { Image } from "./";

const styles = {
  icon: {
    imageHeight: 40,
    imageWidth: 40,
    y: 20
  },
  stage: {
    height: 500,
    width: 500
  }
};

/**
 * @description Canvas component tries to render svg images in various formats on canvas.
 * pngAsset is used for comparison purposes.
 * Svg formats rendering both in Chrome and Firefox are:
 *  - base64DataUrl
 *  - svgAsset
 *  - svgFile
 * Note: rendering a svg image on canvas in Firefox requires the height and width properties
 * to be explicitly set in the svg file/string.
 */
function Canvas({
  pngAsset,
  base64DataUrl,
  dataUrl,
  svgAsset,
  svgFile,
  svgString
}) {
  return (
    <StageRK {...styles.stage}>
      <LayerRK>
        <Image imageUrl={pngAsset} x={20} {...styles.icon} />
        <Image imageUrl={base64DataUrl} x={90} {...styles.icon} />
        <Image imageUrl={dataUrl} x={160} {...styles.icon} />
        <Image imageUrl={svgAsset} x={230} {...styles.icon} />
        <Image imageUrl={svgFile} x={300} {...styles.icon} />
        <Image imageUrl={svgString} x={370} {...styles.icon} />
      </LayerRK>
    </StageRK>
  );
}

export default Canvas;
