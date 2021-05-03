import React, {FC} from "react";
import { IProject } from "./data";


export const ProjectContent:FC<IProject> = ({id, title, description, link}) => {

  // const projectStyle = id % 2 !== 0 ? "project__content" : "project__content--inverted"

  const projectStyle = "project__content";

  return(
    <div className={projectStyle}>
      <h2 className={`${projectStyle}__title`}>{title}</h2>
      <p className={`${projectStyle}__description`}>{description}</p>
      <a href={link} rel="noreferrer" target="_blank"><button className={`${projectStyle}__btn`}>Repository</button></a>
    </div>

  );
};