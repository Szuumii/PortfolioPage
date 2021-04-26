import * as React from "react";
import { Link } from "react-scroll";

export default function HomeButtons() {
  return(
    <div className="home-buttons">
      <Link to="about" smooth={true}><button className="btn" style={{fontSize: "2.5vh"}}>About Me</button></Link>
      <Link to="contact" smooth={true}><button className="btn-inverted" style={{fontSize: "2.5vh"}}>Contact Me</button></Link>
    </div>
  );
};