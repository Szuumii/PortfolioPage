import * as React from "react"
import {FaBars} from "react-icons/fa"
import { useGlobalContext } from "../hooks/context";


export default function Modal() {

  const {toggle} = useGlobalContext();

  return(
    <button className="modal" onClick={toggle}>
      <FaBars size="4em"/>
    </button>
  );
};