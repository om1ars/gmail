import { Button, IconButton } from "@material-ui/core";
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Person, Phone, Star } from "@material-ui/icons";
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
      <SidebarOption IconSidebar={<AccessTime />} title="Snoozed" number={54} />
      <SidebarOption IconSidebar={<LabelImportant />} title="Important" number={54} />
      <SidebarOption IconSidebar={<NearMe />} title="Drafts" number={54} />
      <SidebarOption IconSidebar={<ExpandMore />} title="More" number={54} />
      <div className='sidebar__foter'>
          <div className='sidebar__footerIcon'>
              <IconButton>
                  <Person />
              </IconButton>
              <IconButton>
                  <Duo />
              </IconButton>
              <IconButton>
                  <Phone />
              </IconButton>
          </div>
      </div>
    </div>
  );
};
