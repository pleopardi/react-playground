import React, { Component } from "react";
import { Router } from "@reach/router";
import { Carousel, Home } from "./pages";

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
