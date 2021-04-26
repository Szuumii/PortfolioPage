import * as React from "react"
import HomeButtons from "./homeButtons";

export default function HomeText() {
  return(
    <div className="home-text">
      <div style={{paddingTop: "7vmax"}}>
        <p className="home-title">Hello, I'm</p>
        <p className="home-name">Jakub Szumski</p>
        <p className="home-description">I am Web Developer and Computer Science Student at Warsaw Univeristy of Technology</p>
        <HomeButtons/>
      </div>
    </div>
  );
};