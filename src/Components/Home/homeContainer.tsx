import * as React from "react";
import { useGlobalContext } from "../hooks/context";
import useWindowSize from "../hooks/windowSize";
import HomeContent from "./homeContent";
import Navigation from "./navigation";
import ProfilePicture from "./profilePicture";

export default function HomeContainer() {

  const [height, width] = useWindowSize();

  const {showNavigation} = useGlobalContext();
  
  return(
    <div className="home-container">
      {showNavigation && <Navigation/>}
      <HomeContent/>
      { width >= 750 && <ProfilePicture/>}
    </div>
  );
};