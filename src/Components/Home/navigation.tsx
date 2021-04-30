import * as React from "react";
import { links, link } from "./links";
import { Link } from 'react-scroll'
import { useGlobalContext } from "../hooks/context";

export default function Navigation() {

  const {toggleOff} = useGlobalContext();

  return(
    <div className="navigation">
      {links.map((link: link) => { return  <Link key={link.id} className="nav-link" to={link.to} spy={link.spy} smooth={link.smooth} onClick={toggleOff}>{link.name}</Link>})}
    </div>
  );
};