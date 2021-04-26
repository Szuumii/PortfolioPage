import * as React from "react";
import Social from '../General/social'
import HomeText from "./homeText";


export default function HomeContent() {
  return(
    <div className="home-content">
      <HomeText/>
      <div style={{paddingLeft:"4vmax"}}>
        <Social/>
      </div>
    </div>
  );
};