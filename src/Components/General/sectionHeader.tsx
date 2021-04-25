import * as React from "react";

export default function SectionHeader(props: {sectionName: string}) {
  return(
    <div className="section-header">
      {props.sectionName}
      <div className="underline"/>
    </div>
  );
};