import React, { Component } from "react";
import { Router } from "@reach/router";
import { Home } from "./pages";
import { Carousel } from "./experiments";

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Carousel path="/carousel" />
      </Router>
    );
  }
}

export default App;
