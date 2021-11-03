import React, { useState } from 'react';
import './App.css';
import Header from './componnets/Header';
import { Sidebar } from './componnets/Sidebar';

function App() {

  const [sidebarOpen, setSidebarOpen]  = useState(false)
  return (
    <div className="app">
      <Header setSidebarOpen={setSidebarOpen} />
      <Sidebar />
    </div>
  );
}

export default App;
