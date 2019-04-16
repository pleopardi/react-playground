import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router } from "@reach/router";
import { Home } from "./pages";
import { Canvas, Carousel, PdfGeneration, Polaris, ThreeJSScene } from "./experiments";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Router>
          <Home path="/" />
          <Canvas path="/canvas" />
          <Carousel path="/carousel" />
          <PdfGeneration path="/pdf" />
          <Polaris path="/polaris" />
          <ThreeJSScene path="/threejs" />
        </Router>
      </Fragment>
    );
  }
}

export default App;
