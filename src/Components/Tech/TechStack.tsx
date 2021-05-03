import React, { FC } from "react";
import useWindowSize from "../hooks/WindowSize";
import { IconContext } from "react-icons"
import { ITechnology, techDiamond, techGrid} from "./data";
import {TechIcon} from "./TechIcon";
import { ITechText } from "./TechText";
import { mobileBreakpoint } from "../General/data";

interface Props {
  selected: ITechText,
  select: (chosen: ITechText) => void
}

export const TechStack: FC<Props> = ({selected, select}) => {

  const [height, width] = useWindowSize();

  // console.log(width);

  const iconValue = {
    size: (width >= mobileBreakpoint + 5 ? "4vmin" : "6vmin")
  }  
  return(
    <IconContext.Provider value={iconValue}>
      <div className="tech-stack">
      {
          (width >= mobileBreakpoint + 5 ? techDiamond : techGrid).map((column: ITechnology[]) => {
            return (
              <div className="tech-stack__column">
                {column.map((elem: ITechnology) => {
                  return <TechIcon key={elem.id} icon={elem.icon} title={elem.title} description={elem.description} select={select} selected={selected}/>
                })}
              </div>
            );
          })
        }
        </div>
    </IconContext.Provider>
  );
};