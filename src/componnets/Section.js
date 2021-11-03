import React from "react";
import './Section.css'

export const Section = ({ IconSection, title, color, selected }) => {
  return (
    <div
      className={`section ${selected && `section--active`}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >

        {IconSection}
        <h4>{title}</h4>
    </div>
  );
};
