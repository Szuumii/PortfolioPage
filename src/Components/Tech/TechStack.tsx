import React from "react";
import useWindowSize from "../hooks/WindowSize";
import { IconContext } from "react-icons"
import { ITechnology, techDiamond, techGrid} from "./data";
import {TechIcon} from "./TechIcon";
import { ITechText } from "./TechText";

export default function TechStack(props: {selected: ITechText, select: (chosen: ITechText) => void}) {

  const [height, width] = useWindowSize();

  if (width < 850) {
    return(
      <IconContext.Provider value={{size:"3vmax"}}>
        <div className="tech-stack">
          {
            techGrid.map((column: ITechnology[]) => {
              return (
                <div className="tech-stack__column">
                  {column.map((elem: ITechnology) => {
                    return <TechIcon key={elem.id} icon={elem.icon} title={elem.title} description={elem.description} select={props.select} selected={props.selected}/>
                  })}
                </div>
              );
            })
          }
          </div>
      </IconContext.Provider>
    );
  } else {
    return(
      <IconContext.Provider value={{size:"2vmax"}}>
        <div className="tech-stack">
          {
            techDiamond.map((column: ITechnology[]) => {
              return (
                <div className="tech-stack__column">
                  {column.map((elem: ITechnology) => {
                    return <TechIcon key={elem.id} icon={elem.icon} title={elem.title} description={elem.description} select={props.select} selected={props.selected}/>
                  })}
                </div>
              );
            })
          }
          </div>
      </IconContext.Provider>
    );
  }


  
};