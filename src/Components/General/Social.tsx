import React from "react";
import { IconContext } from "react-icons";
import useWindowSize from "../hooks/WindowSize";
import { mobileBreakpoint, social, socialLink } from "./data";

export const Social = () => {

  const [height, width] = useWindowSize();

  const iconSize = width > mobileBreakpoint ? "2em" : "3em";
  
  return(
    <IconContext.Provider value={{ color: "#ECECEE", size: iconSize}} >
          <ul className="social">
          {social.map((link: socialLink) => {
            const {id, url, icon} = link;
            return (
              <li className="social__icon" key={id}>
                  <a href={url} rel="noreferrer" target="_blank">{icon}</a>
              </li>
            );
          })}
        </ul>
    </IconContext.Provider>
  );
};
