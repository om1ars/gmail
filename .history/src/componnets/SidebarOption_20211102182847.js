import React from "react";
import "./SidebarOption.css";

export const SidebarOption = ({ IconSidebar, title, number, selected }) => {
  return <div className={`sidebarOption ${selected && `sidebar--active`}`}>
     <div>{IconSidebar}</div> 
      <h3>{title}</h3>
      <p>{number}</p>
  </div>;
};
