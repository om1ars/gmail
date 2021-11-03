import React, { useState } from "react";
import "./App.css";
import Header from "./componnets/Header";
import { Sidebar } from "./componnets/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Mail } from "./componnets/Mail";
import { EmailList } from "./componnets/EmailList";
import { SendMail } from "./componnets/SendMail";
import { useSelector } from "react-redux";
import { selectSenMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSenMessageIsOpen);
  return (
    <Router>
      <div className="app">
        <div className="app__body">
        <Header />

          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
