import * as React from "react";
import { useGlobalContext } from "../hooks/context";

export interface ITechText {
  title: string,
  description: string,
}

export default function TechText() {
  const {selected} = useGlobalContext();

  return(
    <div className="tech-text">
      <p className="tech-title">{selected.title}</p>
      <div className="underline"/>
      <p className="tech-description">{selected.description}</p>
    </div>
  );
};