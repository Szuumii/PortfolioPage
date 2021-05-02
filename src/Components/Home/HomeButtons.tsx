import React from "react";
import { Link } from "react-scroll";

export const HomeButtons = () => {

  return(
    <div className="home-text__buttons">
      <Link to="about" smooth={true}><button className="btn-home">About Me</button></Link>
      <Link to="contact" smooth={true}><button className="btn-home--inverted">Contact Me</button></Link>
    </div>
  );
};