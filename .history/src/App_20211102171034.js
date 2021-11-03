import React, { useState } from 'react';
import './App.css';
import Header from './componnets/Header';

function App() {

  const [sidebarOpen, setSidebarOpen]  = useState(false)
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
