import React from "react";
import { IconContext } from "react-icons";
import { social, socialLink } from "./data";

export default function Social() {
  return(
    <IconContext.Provider value={{ color: "#ECECEE", size: "2em"}} >
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
