import * as React from "react";
import { IconContext } from "react-icons";
import { social, socialLink } from "./data";

export default function Social() {
  return(
    <IconContext.Provider value={{ color: "#ECECEE", size: "1.5em"}} >
      <div className="social-container">
        {social.map((link: socialLink) => {
          const {id, url, icon} = link;
          return (
            <div className="social-icon" key={id}>
              <a href={url}>{icon}</a>
            </div>
          );
        })}
      </div>
    </IconContext.Provider>
  );
};
