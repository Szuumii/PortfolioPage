import React, { FC } from "react";
import { mobileBreakpoint } from "../General/data";
import {Logo} from "../General/Logo";
import useWindowSize from "../hooks/WindowSize";
import {Modal} from "./Modal";
import {Navigation} from "./Navigation";

interface Props {
  toggle: () => void,
  toggleOff: () => void
}

export const Navbar:FC<Props> = ({toggle, toggleOff}) => {

  const[height, width] = useWindowSize();

  return(
    <nav className="navbar">
      <Logo/>
      {width > mobileBreakpoint ? <Navigation toggleOff={toggleOff}/> : <Modal toggle={toggle}/>}
    </nav>
  );
};