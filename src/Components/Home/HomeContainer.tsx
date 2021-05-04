import React, {FC} from "react";
import { mobileBreakpoint } from "../General/data";
import useWindowSize from "../hooks/WindowSize";
import {HomeContent} from "./HomeContent";
import {Navigation} from "./Navigation";
import {ProfilePicture} from "./ProfilePicture";

interface Props {
  showNavigation: boolean,
  toggleOff: () => void
}

export const HomeContainer:FC<Props> = ({showNavigation, toggleOff}) => {

  const [height, width] = useWindowSize();

  return(
    <div className="home-container">
      {showNavigation && <Navigation toggleOff={toggleOff}/>}
      <HomeContent toggleOff={toggleOff}/>
      { width >= mobileBreakpoint && <ProfilePicture/>}
    </div>
  );
};