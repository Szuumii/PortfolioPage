import * as React from "react";
import Social from '../General/social'
import Sign from "./sign";


export default function Welcome() {
  return(
    <div className="welcome">
      <Sign/>
      <Social/>
    </div>
  );
};