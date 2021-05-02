import React from "react";
import {Social} from '../General/Social'
import {HomeText} from "./HomeText";


export const HomeContent = () => {
  return(
    <div className="home-content">
      <HomeText/>
      <div className="social-wrapper">
        <Social/>
      </div>
    </div>
  );
};