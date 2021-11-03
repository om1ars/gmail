import { Button, IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize="large" />}
        className="sidebar__conposed"
      >
        Compose
      </Button>
    </div>
  );
};
