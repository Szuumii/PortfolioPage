import React from "react";
import { mobileBreakpoint } from "../General/data";
import useWindowSize from "../hooks/WindowSize";
import {HomeContent} from "./HomeContent";
import {Navigation} from "./Navigation";
import {ProfilePicture} from "./ProfilePicture";

export const HomeContainer = () => {

  const [height, width] = useWindowSize();

  return(
    <div className="home-container">
      {/* {showNavigation && <Navigation/>} */}
      <HomeContent/>
      { width >= mobileBreakpoint && <ProfilePicture/>}
    </div>
  );
};