import React, {FC} from "react";
import { AboutIcon } from "./AboutIcon";
import { IAboutInfo } from "./data";

export const AboutElement: FC<IAboutInfo> = ({id, img, description}) => {
  return(
      <div key={id} className="about-element">
        <AboutIcon src={img.src} alt={img.alt} height={img.height}/>
        <p className="about-element__description">{description}</p>
      </div>  
  );
};