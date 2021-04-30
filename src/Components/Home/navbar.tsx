import * as React from "react";
import Logo from "../General/logo";
import useWindowSize from "../hooks/windowSize";
import Modal from "./modal";
import Navigation from "./navigation";

export default function Navbar() {

  const[height, width] = useWindowSize();

  return(
    <nav className="navbar">
      <Logo width="4em" height="4em"/>
      {width > 750 && <Navigation/>}
      {width <= 750 && <Modal/>}
    </nav>
  );
};