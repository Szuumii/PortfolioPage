import React, {FC} from "react";
import { IProject } from "./data";


export const ProjectContent:FC<IProject> = ({id, title, description, link}) => {

  return(
    <div className="project__content">
      <h2 className="project__title">{title}</h2>
      <p className="project__description">{description}</p>
      <a href={link} rel="noreferrer" target="_blank"><button className="project__btn">Repository</button></a>
    </div>

  );
};