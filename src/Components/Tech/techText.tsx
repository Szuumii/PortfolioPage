import * as React from "react";
import { useGlobalContext } from "../context";
import {techStack} from "./data"

export interface ITechText {
  title: string,
  description: string,
}

export default function TechText() {
  const {selected} = useGlobalContext();

  const id = selected;

  const {title, description} = techStack[id];

  return(
    <div className="tech-text">
      <p className="tech-title">{title}</p>
      <div className="underline"/>
      <p className="tech-description">{description}</p>
    </div>
  );
};