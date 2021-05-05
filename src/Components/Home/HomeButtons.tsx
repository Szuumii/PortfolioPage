import React, { FC } from "react";
import { Link } from "react-scroll";

interface Props {
  toggleOff: () => void
}

export const HomeButtons:FC<Props> = ({toggleOff}) => {

  return(
    <div className="home-text__buttons">
      <Link to="about-section" smooth={true}><button className="btn-home" onClick={toggleOff}>About Me</button></Link>
      <Link to="contact-section" smooth={true}><button className="btn-home--inverted" onClick={toggleOff}>Contact Me</button></Link>
    </div>
  );
};