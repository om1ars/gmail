import { Button, IconButton } from "@material-ui/core";
import { Add, Inbox, Star } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import { SidebarOption } from "./SidebarOption";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize="large" />}
        className="sidebar__conposed"
      >
        Compose
      </Button>
      <SidebarOption selected IconSidebar={<Inbox />} title="Inbox" number={54} />
      <SidebarOption IconSidebar={<Star />} title="Starred" number={54} />
      <SidebarOption IconSidebar={<Inbox />} title="Inbox" number={54} />
      <SidebarOption IconSidebar={<Inbox />} title="Inbox" number={54} />
      <SidebarOption IconSidebar={<Inbox />} title="Inbox" number={54} />
      <SidebarOption IconSidebar={<Inbox />} title="Inbox" number={54} />
      <SidebarOption IconSidebar={<Inbox />} title="Inbox" number={54} />
      <SidebarOption IconSidebar={<Inbox />} title="Inbox" number={54} />
      <SidebarOption IconSidebar={<Inbox />} title="Inbox" number={54} />
    </div>
  );
};
