import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderTwoTone } from "@material-ui/icons";
import React from "react";
import "./EmailRow.css";

export const EmailRow = ({ title, subject, desc, time, id }) => {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox /><Email
        <IconButton>
          <StarBorderTwoTone />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow__title">
          <Email
      </div>
      <div className="emailRow__message"></div>
      <div className="emailRow__desc"></div>
    </div>
  );
};
