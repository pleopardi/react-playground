import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router } from "@reach/router";
import { Home } from "./pages";
import { Carousel } from "./experiments";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Router>
          <Home path="/" />
          <Carousel path="/carousel" />
        </Router>
      </Fragment>
    );
  }
}

export default App;
