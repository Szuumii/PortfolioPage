import React from "react";
import useWindowSize from "../hooks/WindowSize";
import HomeContent from "./HomeContent";
import Navigation from "./Navigation";
import ProfilePicture from "./ProfilePicture";

export default function HomeContainer() {

  const [height, width] = useWindowSize();

  return(
    <div className="home-container">
      {/* {showNavigation && <Navigation/>} */}
      <HomeContent/>
      { width >= 750 && <ProfilePicture/>}
    </div>
  );
};