import React, {FC} from "react";
import { ITechText } from "./TechText";


export const TechIcon:FC<{icon:any, title: string, description:any, selected: ITechText, select: (chosen: ITechText) => void}> = ({icon, title, description, selected, select}) => {

  return(
    <button className={selected.title === title ? "tech-stack__column__icon--selected" : "tech-stack__column__icon"} onClick={() => {select({title, description})}}>
      {icon}
    </button>
  );
};