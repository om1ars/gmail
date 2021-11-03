import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalActivity,
  LocalOffer,
  More,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import { EmailRow } from "./EmailRow";
import { db } from "./firebase";
import { Section } from "./Section";

export const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => setEmails(snapshot.docs.map((doc) => )));
  }, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section IconSection={<Inbox />} title="primary" color="red" selected />
        <Section IconSection={<People />} title="Social" color="yellow" />
        <Section IconSection={<LocalOffer />} title="Prmotions" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Twich"
          subject="Hey fellow streamer"
          desc="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Twich"
          subject="Hey fellow streamer"
          desc="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Twich"
          subject="Hey fellow streamer"
          desc="This is a test"
          time="10pm"
        />
      </div>
    </div>
  );
};
