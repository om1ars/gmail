import React, { useState } from 'react';
import './App.css';
import Header from './componnets/Header';
import { Sidebar } from './componnets/Sidebar';

function App() {

  const [sidebarOpen, setSidebarOpen]  = useState(false)

  const togleSidebar = () => {
    console.log('clicked')
    setSidebarOpen(!sidebarOpen)
  }
  return (
    <div className="app">
      <Header togleSidebar={togleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} />
    </div>
  );
}

export default App;
