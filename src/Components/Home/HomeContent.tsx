import React, { FC } from "react";
import {Social} from '../General/Social'
import {HomeText} from "./HomeText";

interface Props {
  toggleOff: () => void
}

export const HomeContent:FC<Props> = ({toggleOff}) => {
  return(
    <div className="home-container__content">
      <HomeText toggleOff={toggleOff}/>
      <Social/>
    </div>
  );
};