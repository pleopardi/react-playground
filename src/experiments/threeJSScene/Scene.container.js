import React, { Component, createRef } from "react";
import Scene from "./Scene";
import { init } from "./threeJSScene";

class SceneContainer extends Component {
  constructor(props) {
    super(props);

    this.sceneRef = createRef();
  }

  componentDidMount() {
    init(this.sceneRef.current);
  }

  render() {
    return <Scene sceneRef={this.sceneRef} />;
  }
}

export default SceneContainer;
