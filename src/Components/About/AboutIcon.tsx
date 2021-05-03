import React, { FC } from 'react';
import {IAboutIcon} from "./data";
import img from "../../static/images/computer.png";

export const AboutIcon:FC<IAboutIcon> = ({src, alt, height}) => {

  console.log(img);
  return (
      <span className="about-element__icon"> 
        <img src={img} alt={alt} width="auto" height={height}/>
      </span>
  );
}
