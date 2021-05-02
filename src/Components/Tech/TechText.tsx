import React, { FC } from "react";
import { ITechnology } from "./data";

export interface ITechText {
  title: string,
  description: string
}

export const TechText:FC<ITechText> = ({title, description}) => {
  
  return(
    <div className="tech-text">
      <p className="tech-text__title">{title}</p>
      <div className="underline"/>
      <p className="tech-text__description">{description}</p>
    </div>
  );
};