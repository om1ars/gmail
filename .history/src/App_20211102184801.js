import React, { useState } from "react";
import "./App.css";
import Header from "./componnets/Header";
import { Sidebar } from "./componnets/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router></Router>
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
