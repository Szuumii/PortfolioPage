import * as React from "react";
import SectionHeader from "../General/SectionHeader"
import AboutContainer from "./AboutContainer";

export default function AboutSection() {
  return(
    <div className="about-section">
      <SectionHeader sectionName="About Me"/>
      <AboutContainer/>
    </div>
  );
};