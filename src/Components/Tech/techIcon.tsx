import * as React from "react";
import { useGlobalContext } from "../context";
import { ITechnology } from "./data";


export default function TechIcon(props: {id: number, icon:any}) {
  const {id, icon} = props;

  const {select} = useGlobalContext();

  return(
    <button className="tech-icon" onClick={() => { select(id)}}>
      {icon}
    </button>
  );
};