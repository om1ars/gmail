import React, {useState} from "react";
import "./SidebarOption.css";

export const SidebarOption = ({ IconSidebar, title, number, selected }) => {
  const [sidebarSelected, setSidebarSelected] = useState(false)

  const handleClick = () => {

    
  }
  return (
    <div className={`sidebarOption ${selected && `sidebar--active`}`}
    
    onClick={() => handleClick(false)}
    >
      <div>{IconSidebar}</div>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};
