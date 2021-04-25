import * as React from "react";
import { IconContext } from "react-icons";
import {aboutTable, aboutInfo} from "./data";

export default function AboutContainer() {
  return(
    <IconContext.Provider value={{ color: "#1C232E", size: "9rem"}} >
    <div className="about-container">
      {aboutTable.map((element: aboutInfo) => {
        const {id, icon, description} = element;
        return(
          <div key={id} className="about-element">
            {icon}
            <p>{description}</p>
          </div>  
        );
      })}
    </div>
    </IconContext.Provider>
  );
};