import React, { Component, createRef, Fragment } from "react";
import DimensionsPanel from "./DimensionsPanel";
import Scene from "./Scene";
import TextureInput from "./TextureInput";
import threeJSScene from "./threeJSScene";

class SceneContainer extends Component {
  constructor(props) {
    super(props);

    this.sceneRef = createRef();

    this.dimensions = ["x", "y", "z"].map(axis => ({
      handleDimensionChange: this.handleSetDimension.bind(this, axis),
      label: `${axis} size (mm):`
    }));

    this.handleUploadTexture = this.handleUploadTexture.bind(this);
  }

  handleSetDimension(axis, event) {
    this.handleSetDimensions({ [axis]: parseFloat(event.target.value) });
  }

  handleSetDimensions({ x, y, z }) {
    this.scene.setDimensions({ x, y, z });
  }

  handleUploadTexture(event) {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      this.scene.setMaterial(reader.result);
    };

    reader.readAsDataURL(file);
  }

  componentDidMount() {
    this.scene = threeJSScene(this.sceneRef.current);
    this.scene.init();
  }

  render() {
    return (
      <Fragment>
        <Scene sceneRef={this.sceneRef} />
        <DimensionsPanel dimensions={this.dimensions} />
        <TextureInput handleUploadTexture={this.handleUploadTexture} />
      </Fragment>
    );
  }
}

export default SceneContainer;
