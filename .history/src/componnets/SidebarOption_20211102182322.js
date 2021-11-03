import React from "react";
import "./SidebarOption.css";

export const SidebarOption = ({ IconSidebar, title, number }) => {
  return <div className='sidebarOption'>
     <div>{IconSidebar}</div> 
      <h3>{title}</h3>
      <p>{number}</p>
  </div>;
};
