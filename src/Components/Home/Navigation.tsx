import React, { FC } from "react";
import { links, link } from "./links";
import { Link } from 'react-scroll'

interface Props {
  toggleOff: () => void
}
export const Navigation:FC<Props> = ({toggleOff}) => {

  return(
    <ul className="navigation">
      {links.map((link: link) => { return  <li key={link.id} className="navigation__link"><Link to={link.to} spy={link.spy} smooth={link.smooth} onClick={toggleOff}>{link.name}</Link></li>})}
    </ul>
  );
};