import React from "react";
import {AboutElement} from "./AboutElement";
import {aboutTable, IAboutInfo} from "./data";

export const AboutContainer = () => {
  return(
    <div className="about-container">
      {aboutTable.map((element: IAboutInfo) => {
        const {id, icon, description} = element;
        return(
          <AboutElement key={id} id={id} icon={icon} description={description}/>
        );
      })}
    </div>
  );
};