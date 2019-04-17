import React, { Component, createRef, Fragment } from "react";
import DimensionsBar from "./DimensionsBar";
import Scene from "./Scene";
import threeJSScene from "./threeJSScene";

class SceneContainer extends Component {
  constructor(props) {
    super(props);

    this.sceneRef = createRef();

    this.handleSetDimensions = this.handleSetDimensions.bind(this);
  }

  handleSetDimensions(x, y, z) {
    this.scene.setDimensions(x, y, z);
  }

  componentDidMount() {
    this.scene = threeJSScene(this.sceneRef.current);
    this.scene.init();
  }

  render() {
    return (
      <Fragment>
        <Scene sceneRef={this.sceneRef} />
        <DimensionsBar handleSetDimensions={this.handleSetDimensions} />
      </Fragment>
    );
  }
}

export default SceneContainer;
