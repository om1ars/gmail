import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  Delete,
  Email,
  Error,
  WatchLater,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import "./Mail.css";

export const Mail = () => {

    let history = useHistory()
  return (
    <div className="mail">
      <div className="email__body"></div>
      <div className="email__toolsRight">
        <IconButton  onClick={() => hist}>
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
          <WatchLater />
        </IconButton>
      </div>
    </div>
  );
};
