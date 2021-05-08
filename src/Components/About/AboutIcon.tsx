import React, { FC } from 'react';
import {IAboutIcon} from "./data";

export const AboutIcon:FC<IAboutIcon> = ({src, alt, height}) => {

  return (
      <span className="about-element__icon"> 
        <img src={src} alt={alt} width="auto" height={height}/>
      </span>
  );
}
