import * as React from "react";
import { IProjectContent } from "./data";


interface IStyle {
  alignItems: string,
  padding: string
}

const styleSheet: IStyle[] = [
  {
    alignItems: "flex-end",
    padding: "0 1.5rem 0 0"
  },
  {
    alignItems: "flex-start",
    padding: "0 0 0 1.5rem"
  }
]

export default function ProjectContent(props: IProjectContent) {
  const {id, title, description, link} = props;

  const idx = id % 2;

  return(
    <div className="project-content" style={{alignItems: styleSheet[idx].alignItems}}>
      <p className="project-title" style={{padding: styleSheet[idx].padding}}>{title}</p>
      <p className="project-description" style={{padding: styleSheet[idx].padding}}>{description}</p>
      <a href={link} style={{padding: styleSheet[idx].padding, textDecoration:"none"}}><div className="btn btn-project-container">Repository</div></a>
    </div>

  );
};