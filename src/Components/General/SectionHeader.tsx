import React from "react";

export default function SectionHeader(props: {sectionName: string}) {
  return(
    <div className="section-header">
      <h2 className="section-header__section-name">{props.sectionName}</h2>
      <div className="underline"/>
    </div>
  );
};