import * as React from "react";
import { IProjectContent } from "./data";
import ProjectContent from "./projectContent";

export default function ProjectContainer(props: IProjectContent) {

  const {id, title, img, description, link} = props;

  const inverted = props.id % 2 === 0 ? false : true;

  if (inverted) {
    return(
      <div className="project-container">
        <ProjectContent id={id} title={title} description={description} img={img} link={link}/>
        <div style={{borderRadius: "0 1.25rem 1.25rem 0"}} className="project-graphic"></div>
      </div>
    );
  } else {
    return(
      <div className="project-container">
        <div style={{borderRadius: "1.25rem 0 0 1.25rem"}} className="project-graphic"></div>
        <ProjectContent id={id} title={title} description={description} img={img} link={link}/>
      </div>
    );
  }
};