import React, { useState } from 'react';
import './App.css';
import Header from './componnets/Header';
import { Sidebar } from './componnets/Sidebar';

function App() {

  const [sidebarOpen, setSidebarOpen]  = useState(false)

  const togleSidebar = () => {
    setSidebarOpen={!setSidebarOpen}
  }
  return (
    <div className="app">
      <Header togleSidebar={togleSidebar} />
      <Sidebar />
    </div>
  );
}

export default App;
