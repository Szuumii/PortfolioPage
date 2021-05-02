import React from "react";
import {Social} from '../General/Social'
import {HomeText} from "./HomeText";


export const HomeContent = () => {
  return(
    <div className="home-container__content">
      <HomeText/>
      <Social/>
    </div>
  );
};