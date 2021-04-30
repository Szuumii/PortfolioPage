import * as React from "react";
import SectionHeader from "../General/sectionHeader"
import TechContainer from "./techContainer";

export default function Tech() {

  return(
    <div className="tech">
      <SectionHeader sectionName="Tech Stack"/>
      <TechContainer/>
    </div>
  );
};