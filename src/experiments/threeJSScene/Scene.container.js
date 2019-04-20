import React, { Component, createRef, Fragment } from "react";
import DimensionsPanel from "./DimensionsPanel";
import Scene from "./Scene";
import threeJSScene from "./threeJSScene";

class SceneContainer extends Component {
  constructor(props) {
    super(props);

    this.sceneRef = createRef();

    this.dimensions = ["x", "y", "z"].map(axis => ({
      handleDimensionChange: this.handleSetDimension.bind(this, axis),
      label: `${axis} size (mm):`
    }));
  }

  handleSetDimension(axis, event) {
    this.handleSetDimensions({ [axis]: parseFloat(event.target.value) });
  }

  handleSetDimensions({ x, y, z }) {
    this.scene.setDimensions({ x, y, z });
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
      </Fragment>
    );
  }
}

export default SceneContainer;
