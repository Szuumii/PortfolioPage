import * as React from "react";
import { Link } from "react-scroll";
import { useGlobalContext } from "../hooks/context";

export default function HomeButtons() {

  const {toggleOff} = useGlobalContext();

  return(
    <div className="home-buttons">
      <Link to="about" smooth={true}><button className="btn btn-home" onClick={toggleOff}>About Me</button></Link>
      <Link to="contact" smooth={true}><button className="btn-inverted btn-home"onClick={toggleOff}>Contact Me</button></Link>
    </div>
  );
};