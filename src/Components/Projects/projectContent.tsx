import * as React from "react";
import { IProjectContent } from "./data";


interface IStyle {
  alignItems: string
  paddingRight?: string
  paddingLeft?: string
}

const styleSheet: IStyle[] = [
  {
    alignItems: "flex-end",
    // paddingRight: "2em"
  },
  {
    alignItems: "flex-start",
    // paddingLeft: "2em"
  }
]

export default function ProjectContent(props: IProjectContent) {
  const {id, title, description, link} = props;

  const idx = id % 2;

  return(
    <div style={styleSheet[idx]}className="project-content">
      <p className="project-title">{title}</p>
      <p className="project-description">{description}</p>
      <a href={link} style={{textDecoration:"none"}}><div className="btn btn-project">Repository</div></a>
    </div>

  );
};