import React, { useState } from "react";
import "./App.css";
import Header from "./componnets/Header";
import { Sidebar } from "./componnets/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Mail } from "./componnets/Mail";
import { EmailList } from "./componnets/EmailList";
import { SendMail } from "./componnets/SendMail";

function App() {

  const
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
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
        <SendMail />
      </Router>
    </div>
  );
}

export default App;
