import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router } from "@reach/router";
import { Home } from "./pages";
import { Canvas, Carousel, Polaris } from "./experiments";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Router>
          <Home path="/" />
          <Canvas path="/canvas" />
          <Carousel path="/carousel" />
          <Polaris path="/polaris" />
        </Router>
      </Fragment>
    );
  }
}

export default App;
