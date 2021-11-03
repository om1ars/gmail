import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderTwoTone } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./EmailRow.css";

export const EmailRow = ({ title, subject, desc, time, id }) => {
  let history = useHistory();

  const dispatch = useDispatch()

  const openMail = () => {
      dispatch(selectM)
  }
  return (
    <div className="emailRow" onClick={() => history.push("/mail")}>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderTwoTone />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow__title">
        <h3>{title}</h3>
      </div>
      <div className="emailRow__message">
        <h4>{subject}</h4>
        <span className="emailRow__desc">{desc}</span>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
};
