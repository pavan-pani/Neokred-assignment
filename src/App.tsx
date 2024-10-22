import React, { Suspense, useState } from 'react';
import './index.css'
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Sidebar = React.lazy(() => import('./components/Sidebar'));


const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      
      <Suspense fallback={<div className=' text-center text-xl'>Dashboard Loading...</div>}>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Dashboard />
      </Suspense>
      
    </div>
  );
};

export default App;
