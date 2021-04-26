import * as React from "react";
import ProjectContainer from "./projectContainer"
import SectionHeader from "../General/sectionHeader"
import { IProjectContent, projectInfo} from "./data";

export default function Projects() {
  return(
    <div className="projects">
      <SectionHeader sectionName="My Projects"/>
      {projectInfo.map((project: IProjectContent) => {
        const {id, title, description, img, link} = project;
        return (
          <ProjectContainer key={id} id={id} title={title} description={description} img={img} link={link}/>
        );
      })}
      <p style={{fontWeight: 700}}>Check out the rest of my projects</p>
      <a href="https://www.github.com" style={{textDecoration:"none"}}><div className="btn" >Other Projects</div></a>
    </div>
  );
};