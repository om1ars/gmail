import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";

export const SendMail = () => {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New messages</h3>
        <Close className="sendMail__close" />
      </div>
      <form>
        <input placeholder='To' type="text" />
        <input placeholder='Subject' type="text" />
        <input className='' placeholder='Message...' type="text" />
        <div className="sendMail__options">
          <Button
            variant="contained"
            color="primary"
            type="sumbmit"
            className="sendMail__send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};
