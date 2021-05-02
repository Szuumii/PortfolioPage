import React from "react";
import { ITechText } from "./TechText";


export default function TechIcon(props: {icon:any, title: string, description:any, selected: ITechText, select: (chosen: ITechText) => void}) {

  const {title, description} = props;

  return(
    <button className={props.selected.title === title ? "tech-stack__column__icon--selected" : "tech-stack__column__icon"} onClick={() => {props.select({title, description})}}>
      {props.icon}
    </button>
  );
};