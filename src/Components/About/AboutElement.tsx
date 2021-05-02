import React from "react";
import { IAboutInfo } from "./data";

export default function AboutElement(props: IAboutInfo) {
  const {id, icon, description} = props;
  return(
      <div key={id} className="about-element">
        <span className="about-element__icon">{icon}</span>
        <p className="about-element__description">{description}</p>
      </div>  
  );
};