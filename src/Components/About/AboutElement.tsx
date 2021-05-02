import React, {FC} from "react";
import { IAboutInfo } from "./data";

export const AboutElement: FC<IAboutInfo> = ({id, icon, description}) => {
  return(
      <div key={id} className="about-element">
        <span className="about-element__icon">{icon}</span>
        <p className="about-element__description">{description}</p>
      </div>  
  );
};