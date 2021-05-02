import React, { FC } from "react";

export const SectionHeader:FC<{sectionName: string}> = ({sectionName}) => {
  return(
    <div className="section-header">
      <h2 className="section-header__section-name">{sectionName}</h2>
      <div className="underline"/>
    </div>
  );
};