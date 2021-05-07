import React, {FC} from "react";
import { IProject } from "./data";
import {ProjectContent} from "./ProjectContent";

export const Project:FC<IProject> = ({ id, title,  img,  description,  link}) => {

  if (id % 2 !== 0) {
    return(
      <div className="project">
        <ProjectContent id={id} title={title} description={description} link={link}/>
        <div  className="project__graphic" style={{borderRadius: "0 1.25em 1.25em 0"}}>
          <img src={img} alt={`Project ${id} image`} className="project__graphic__image"/>
        </div>
      </div>
    );
  } else {
    return(
      <div className="project">
        <div  className="project__graphic" style={{borderRadius: "1.25em 0 0 1.25em"}}>
          <img src={img} alt={`Project ${id} image`} className="project__graphic__image"/>
        </div>
        <ProjectContent id={id} title={title} description={description} link={link}/>
      </div>
    );
  }
};