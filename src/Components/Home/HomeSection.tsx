import React from "react";
import HomeContainer from "./HomeContainer";
import Navbar from "./Navbar";

export default function HomeSection() {
  return(
    <div className="home-section">
      <Navbar/>
      <HomeContainer/>
    </div>
  );
};