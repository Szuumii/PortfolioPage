import React, { FC } from "react"
import {FaBars} from "react-icons/fa"

interface Props {
  toggle: () => void
}

export const Modal:FC<Props> = ({toggle}) => {

  return(
    <button className="modal" onClick={toggle}>
      <FaBars size="4em"/>
    </button>
  );
};