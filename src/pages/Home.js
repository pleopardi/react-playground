import React from "react";
import { Link } from "@reach/router";

function Home() {
  return (
    <div>
      <h1>List of experiments</h1>
      <Link to="/carousel">Carousel</Link>
    </div>
  );
}

export default Home;
