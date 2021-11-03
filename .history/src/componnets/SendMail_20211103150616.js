import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";

export const SendMail = () => {
    const {register, handleSubmit, watch, error} = useForm()
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New messages</h3>
        <Close className="sendMail__close" />
      </div>
      <form>
        <input name='to' placeholder="To" type="text" />
        <input name='subject' placeholder="Subject" type="text" />
        <input
          className="sendMail__message"
          placeholder="Message..."
          type="text"
          name=''
        />
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
