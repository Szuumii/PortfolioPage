import * as React from "react";
import { useGlobalContext } from "../hooks/context";


export default function TechIcon(props: {icon:any, title: string, description:any}) {
  const {icon, title, description} = props;

  const {selected, select} = useGlobalContext();



  return(
    <button className={selected.title === title ? "tech-icon-selected" : "tech-icon"} onClick={() => { select(title, description)}}>
      {icon}
    </button>
  );
};