import React from "react";
import {HomeContainer} from "./HomeContainer";
import {Navbar} from "./Navbar";

export const HomeSection = () => {
  return(
    <div className="home-section">
      <Navbar/>
      <HomeContainer/>
    </div>
  );
};