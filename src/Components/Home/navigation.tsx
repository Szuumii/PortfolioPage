import * as React from "react";
import { links, link } from "./links";
import { Link } from 'react-scroll'

export default function Navigation() {
  return(
    <div className="navigation">
      {links.map((link: link) => { return  <Link key={link.id} className="link" to={link.to} spy={link.spy} smooth={link.smooth}>{link.name}</Link>})}
    </div>
  );
};