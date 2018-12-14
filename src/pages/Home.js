import React from "react";
import { Link } from "@reach/router";

function Home() {
  return (
    <div>
      <h1>List of experiments:</h1>
      <ul>
        <li>
          <Link to="/canvas">Canvas</Link> (canvas + svg)
        </li>
        <li>
          <Link to="/carousel">Carousel</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
