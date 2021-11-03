import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";

export const SendMail = () => {
  const { register, handleSubmit, watch, error } = useForm();


  const onSubmit = (formData) => {
      console.log(formData);
  }
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New messages</h3>
        <Close className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input
          {...register('to',{ required: true })}
          placeholder="To"
          type="text"
        />
              {errors.to && <span>This field is required</span>}
        <input
          {...register('subject',{ required: true })}
          placeholder="Subject"
          type="text"
        />
        <input
          {...register('message',{ required: true })}
          className="sendMail__message"
          placeholder="Message..."
          type="text"
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
