import * as React from "react";
import useWindowSize from "../hooks/windowSize";
import { IconContext } from "react-icons"
import { ITechnology, techDiamond, techGrid} from "./data";
import TechIcon from "./techIcon";

export default function TechStack() {

  const [height, width] = useWindowSize();

  if (width < 1000) {
    return(
      <IconContext.Provider value={{size:"3vmax"}}>
        <div className="tech-stack-container"style={{width:"100%", justifyContent: "center", display:"flex"}}>
        <div className="tech-stack">
          {
            techGrid.map((column: ITechnology[]) => {
              return (
                <div className="tech-column">
                  {column.map((elem: ITechnology) => {
                    return <TechIcon key={elem.id} icon={elem.icon} title={elem.title} description={elem.description}/>
                  })}
                </div>
              );
            })
          }
          </div>
        </div>
      </IconContext.Provider>
    );
  } else {
    return(
      <IconContext.Provider value={{size:"2vmax"}}>
        <div className="tech-stack-container"style={{width:"100%", justifyContent: "center", display:"flex"}}>
        <div className="tech-stack">
          {
            techDiamond.map((column: ITechnology[]) => {
              return (
                <div className="tech-column">
                  {column.map((elem: ITechnology) => {
                    return <TechIcon key={elem.id} icon={elem.icon} title={elem.title} description={elem.description}/>
                  })}
                </div>
              );
            })
          }
          </div>
        </div>
      </IconContext.Provider>
    );
  }


  
};