import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
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
      <div className="flex flex-col flex-1">
        {/* <Navbar toggleSidebar={toggleSidebar} /> */}
        {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
        {/* <Dashboard /> */}
      </div>
    </div>
  );
};

export default App;
