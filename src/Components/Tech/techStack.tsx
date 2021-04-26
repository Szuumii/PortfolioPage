import * as React from "react";
import { ITechnology, techStack } from "./data";
import TechIcon from "./techIcon";


export default function TechStack() {
  return(
    <div className="tech-stack">
      {
        techStack.map((elem: ITechnology) => {
          return <TechIcon key={elem.id} id={elem.id} icon={elem.icon}/>
        })
      }
    </div>
  );
};