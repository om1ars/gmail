import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  LabelImportant,
  MoreVert,
  WatchLater,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import "./Mail.css";

export const Mail = () => {
  let history = useHistory();
  return (
    <div className="mail">
      <div className="email__body"></div>
      <div className="email__toolsRight">
        <IconButton onClick={() => history.push("/")}>
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
        <IconButton>
          <CheckCircle />
        </IconButton>
        <IconButton>
          <LabelImportant />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
};
