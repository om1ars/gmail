import { Menu } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import React from "react";
import "./Header.css";
import {gmail} from '../assets/gmail.png'

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img src={gmail} />
      </div>
      <div className="header__middle"></div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
