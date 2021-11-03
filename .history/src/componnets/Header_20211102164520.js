import { Menu } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import React from "react";
import "./Header.css";
import {gmail} from './'

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
      </div>
      <div className="header__middle"></div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
