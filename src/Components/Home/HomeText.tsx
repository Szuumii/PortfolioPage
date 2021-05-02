import React from "react"
import {HomeButtons} from "./HomeButtons";

export const HomeText = () => {
  return(
    <div className="home-text">
        <h4 className="home-text__title">Hello, I'm</h4>
        <h3 className="home-text__name">Jakub Szumski</h3>
        <p className="home-text__description">I am Web Developer and Computer Science Student at Warsaw Univeristy of Technology</p>
        <HomeButtons/>
      </div>
  );
};