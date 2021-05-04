import React, { useState } from "react";
import {HomeContainer} from "./HomeContainer";
import {Navbar} from "./Navbar";

export const HomeSection = () => {

  const [showNavigation, setShowNavigation] = useState(false);

  const toggle = () => {
    setShowNavigation(!showNavigation);
  }

  const toggleOff = () => {
    setShowNavigation(false);
  }

  return(
    <div className="home-section">
      <Navbar toggle={toggle} toggleOff={toggleOff}/>
      <HomeContainer showNavigation={showNavigation} toggleOff={toggleOff}/>
    </div>
  );
};