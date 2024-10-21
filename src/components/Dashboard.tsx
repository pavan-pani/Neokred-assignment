import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi";
import Sidebar from "./Sidebar";
import ProfileSection from "./Profile";

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProfile = () => {
    setShowProfile((prev) => !prev); 
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <ProfileSection show={showProfile} position="top" />
      <div className="p-4 md:ml-64 overflow-auto w-screen">
        <div className="flex justify-between items-center">
          <button className="md:hidden" onClick={toggleSidebar}>
            <RxHamburgerMenu size={20} />
          </button>
          <button className="md:hidden" onClick={toggleProfile}>
            <HiOutlineUserCircle size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
