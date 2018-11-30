import React, { Component } from "react";
import { Router } from "@reach/router";
import { Home } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
      </Router>
    );
  }
}

export default App;
