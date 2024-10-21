import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/Dashboard';
import './App.css'
import './index.css'

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Dashboard />
    </div>
  );
};

export default App;
