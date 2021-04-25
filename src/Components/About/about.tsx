import * as React from "react";
import SectionHeader from "../General/sectionHeader"
import AboutContainer from "./aboutContainer";

export default function About() {
  return(
    <div className="about">
      <SectionHeader sectionName="About Me"/>
      <AboutContainer/>
    </div>
  );
};