import React from "react";
import Logo from "../General/Logo";
import useWindowSize from "../hooks/WindowSize";
import {Modal} from "./Modal";
import {Navigation} from "./Navigation";

export const Navbar = () => {

  const[height, width] = useWindowSize();

  return(
    <nav className="navbar">
      <Logo width="4em" height="4em"/>
      {width > 750 && <Navigation/>}
    </nav>
  );
};