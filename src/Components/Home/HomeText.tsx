import React, { FC } from "react"
import {HomeButtons} from "./HomeButtons";

interface Props {
  toggleOff: () => void
}

export const HomeText:FC<Props> = ({toggleOff}) => {
  return(
    <div className="home-text">
        <h4 className="home-text__title">Hello, I'm</h4>
        <h3 className="home-text__name">Jakub Szumski</h3>
        <p className="home-text__description">I am a Web Developer and Computer Science Student at Warsaw University of Technology</p>
        <HomeButtons toggleOff={toggleOff}/>
      </div>
  );
};