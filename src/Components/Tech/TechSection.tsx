import React from "react";
import {SectionHeader} from "../General/SectionHeader"
import {TechContainer} from "./TechContainer";

export const TechSection = () => {

  return(
    <div className="tech-section">
      <SectionHeader sectionName="Tech Stack"/>
      <TechContainer/>
    </div>
  );
};