import React, {FC} from "react";
import { IProject } from "./data";

interface Props {
  id: number, 
  title: string, 
  description: string, 
  link: string
}

export const ProjectContent:FC<Props> = ({id, title, description, link}) => {

  const projectStyle = id % 2 !== 0 ? "project__content" : "project__content--inverted"

  return(
    <div className={projectStyle}>
      <h2 className={`${projectStyle}__title`}>{title}</h2>
      <p className={`${projectStyle}__description`}>{description}</p>
      <a href={link} rel="noreferrer" target="_blank"><button className={`${projectStyle}__btn`}>Repository</button></a>
    </div>

  );
};