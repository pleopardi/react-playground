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
        <li>
          <Link to="/pdf">PDF Generation</Link> (jsPDF)
        </li>
        <li>
          <Link to="/polaris">Polaris</Link> (Shopify's Polaris UI)
        </li>
        <li>
          <Link to="/threejs">Three.js Scene</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
