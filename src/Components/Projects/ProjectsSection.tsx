import React from "react";
import {Project} from "./Project"
import {SectionHeader} from "../General/SectionHeader"
import { IProject, projectInfo} from "./data";

export const ProjectsSection = () => {
  return(
    <div className="projects-section">
      <SectionHeader sectionName="My Projects"/>
      {projectInfo.map((project: IProject) => {
        const {id, title, description, img, link} = project;
        return (
          <Project key={id} id={id} title={title} description={description} img={img} link={link}/>
        );
      })}
      <span className="projects-section__span">Check out the rest of my projects</span>
      <a href="https://github.com/Szuumii?tab=repositories" rel="noreferrer" target="_blank"><button className="btn-project" >Other Projects</button></a>
    </div>
  );
};