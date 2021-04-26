import * as React from "react";
import TechStack from "./techStack"
import TechText from "./techText";

export default function TechContainer() {
    return(
    <div className="tech-container">
      <TechStack/>
      <TechText/>
    </div>
  );
};