import React from "react";
import "./Login.css";
import gmail from "../assets/gmail.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const signin = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        loginWithGoogle({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );
    }).catch((error) => alert(error.message))
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={gmail} />
        <Button onClick={() => signin()} color="primary" variant="contained">
          Sign in{" "}
        </Button>
      </div>
    </div>
  );
};

export default Login;
