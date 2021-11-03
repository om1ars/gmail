import { IconButton } from "@material-ui/core";
import React from "react";
import "./Mail.css";

export const Mail = () => {
  return (
    <div className="mail">
      <div className="email__body"></div>
      <div className="email__toolsRight">
          <IconButton>
              
          </IconButton>
          <IconButton></IconButton>
          <IconButton></IconButton>
          <IconButton></IconButton>
      </div>
    </div>
  );
};
