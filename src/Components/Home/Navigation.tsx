import React from "react";
import { links, link } from "./links";
import { Link } from 'react-scroll'

export const Navigation = () => {

  return(
    <ul className="navigation">
      {links.map((link: link) => { return  <li key={link.id} className="navigation__link"><Link to={link.to} spy={link.spy} smooth={link.smooth}>{link.name}</Link></li>})}
    </ul>
  );
};