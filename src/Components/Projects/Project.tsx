import React, {FC} from "react";
import { IProject } from "./data";
import {ProjectContent} from "./ProjectContent";

export const Project:FC<IProject> = ({ id, title,  img,  description,  link}) => {

  // if (id % 2 !== 0) {
  //   return(
  //     <div className="project">
  //       <ProjectContent id={id} title={title} description={description} img={img} link={link}/>
  //       <div style={{borderRadius: "0 1.25rem 1.25rem 0"}} className="project__graphic"></div>
  //     </div>
  //   );
  // } else {
  //   return(
  //     <div className="project">
  //       <ProjectContent id={id} title={title} description={description} img={img} link={link}/>
  //       <div style={{borderRadius: "1.25rem 0 0 1.25rem"}} className="project__graphic"></div>
  //     </div>
  //   );
  // }

  return(
    <div className="project">
      <ProjectContent id={id} title={title} description={description} img={img} link={link}/>
      <div style={{borderRadius: "0 1.25rem 1.25rem 0"}} className="project__graphic"></div>
    </div>
  );
};