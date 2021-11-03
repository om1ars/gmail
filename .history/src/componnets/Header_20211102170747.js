import { Apps, ArrowDropDown, Menu, NotificationImportant, Search } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import React from "react";
import "./Header.css";
import gmail from "../assets/gmail.png";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img src={gmail} />
      </div>
      <div className="header__middle">
        <Search />
        <input type='text' placeholder='Search' />
        <ArrowDropDown className="header__inputCard" />
      </div>
      <div className="header__right">
        <IconButton>
        <Apps />
        <NotificationImportant />
      </div>
    </div>
  );
}

export default Header;
