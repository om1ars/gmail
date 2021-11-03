import React from "react";

export const Section = ({ IconSection, title, color }) => {
  return <div className={`section ${selected && `section--active`}`}
  
  style={{
      borderBottom: `3px solid ${color}`
  }}
  >

  </div>;
};
