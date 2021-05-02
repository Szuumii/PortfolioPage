import React from "react";
import { ITechnology } from "./data";

export interface ITechText {
  title: string,
  description: string
}

export default function TechText(props: ITechText) {
  
  return(
    <div className="tech-text">
      <p className="tech-text__title">{props.title}</p>
      <div className="underline"/>
      <p className="tech-text__description">{props.description}</p>
    </div>
  );
};