import React from "react";
import SectionHeader from "../General/SectionHeader"
import TechContainer from "./TechContainer";

export default function TechSection() {

  return(
    <div className="tech-section">
      <SectionHeader sectionName="Tech Stack"/>
      <TechContainer/>
    </div>
  );
};