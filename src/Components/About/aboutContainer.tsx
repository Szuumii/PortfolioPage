import * as React from "react";
import {aboutTable, aboutInfo} from "./data";

export default function AboutContainer() {
  return(
    <div className="about-container">
      {aboutTable.map((element: aboutInfo) => {
        const {id, icon, description} = element;
        return(
          <div key={id} className="about-element">
            {icon}
            <p className="about-description">{description}</p>
          </div>  
        );
      })}
    </div>
  );
};