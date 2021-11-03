import React from "react";
import "./SidebarOption.css";

export const SidebarOption = ({ IconSidebar, title, number }) => {
  return <div className='sidebarOption'>
      {IconSidebar}
      <h3></h3>
      <p>{number}</p>
  </div>;
};
