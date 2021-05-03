import React from "react";
import {AboutElement} from "./AboutElement";
import {aboutTable, IAboutInfo} from "./data";

export const AboutContainer = () => {
  return(
    <div className="about-container">
      {aboutTable.map((element: IAboutInfo) => {
        const {id, img, description} = element;
        return(
          <AboutElement key={id} id={id} img={img} description={description}/>
        );
      })}
    </div>
  );
};