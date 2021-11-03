import React, { useState } from 'react';
import './App.css';
import Header from './componnets/Header';
import { Sidebar } from './componnets/Sidebar';
import {BrowserRouter as Router, Switch, }

function App() {

  return (
    <div className="app">
      <Header  />
      <Sidebar />
    </div>
  );
}

export default App;
