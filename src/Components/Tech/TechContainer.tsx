import React, {useState} from "react";
import { ITechnology, descriptions } from "./data";
import {TechText, ITechText } from "./TechText";
import {TechStack} from "./TechStack";

export const TechContainer = () => {

  const [selected, setSelected] = useState({ title: "React", description: descriptions.react});

  const select = (chosen: ITechText) => {
    setSelected(chosen);
  }

  return(
  <div className="tech-container">
    <TechStack select={select} selected={selected}/>
    <TechText title={selected.title} description={selected.description}/>
  </div>
  );
};