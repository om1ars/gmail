import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../../firebase";

export const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
      db.collection('')
  };

  const dispatch = useDispatch()
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New messages</h3>
        <Close onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          placeholder="To"
          type="email"
        />
        {errors.to && <span>This field is required</span>}
        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject && <span>This field is required</span>}

        <input
          {...register("message", { required: true })}
          className="sendMail__message"
          placeholder="Message..."
          type="text"
        />
        {errors.message && <span>This field is required</span>}

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
