import React from "react";
import { IProject } from "./data";


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

export default function ProjectContent(props: IProject) {
  const {id, title, description, link} = props;

  const idx = id % 2;

  return(
    <div className="project__content" style={{alignItems: styleSheet[idx].alignItems}}>
      <h2 className="project__title" style={{padding: styleSheet[idx].padding}}>{title}</h2>
      <p className="project__description" style={{padding: styleSheet[idx].padding}}>{description}</p>
      <a href={link} rel="noreferrer" target="_blank" style={{padding: styleSheet[idx].padding}}><button className="project__btn">Repository</button></a>
    </div>

  );
};