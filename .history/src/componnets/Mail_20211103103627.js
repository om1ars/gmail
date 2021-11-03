import { IconButton } from "@material-ui/core";
import { ArrowBack, Delete, Email, Error, WatchLater } from "@material-ui/icons";
import React from "react";
import "./Mail.css";

export const Mail = () => {
  return (
    <div className="mail">
      <div className="email__body"></div>
      <div className="email__toolsRight">
          <IconButton>
              <ArrowBack />
          </IconButton>
          <IconButton>
              <Error />
          </IconButton>
          <IconButton>
              <Delete />
          </IconButton>
          <IconButton>
              <Email />
          </IconButton>
          <IconButton>
              <WatchLater  />
          </IconButton>
      </div>
    </div>
  );
};
