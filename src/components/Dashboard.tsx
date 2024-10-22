import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi";
const ProfileSection = React.lazy(() => import('./Profile'));
const Sidebar = React.lazy(() => import('./Sidebar'));
import orders from '../utility/orders.json'; 

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
      <div className="py-3 px-8 md:ml-64 overflow-auto w-screen bg-[#303030]">
        <div className="flex justify-between items-center rounded-sm">
          <button aria-label="Hamburger Menu" className="md:hidden" onClick={toggleSidebar}>
            <RxHamburgerMenu size={20} color="#fff"/>
          </button>
          <button aria-label="user" className="md:hidden" onClick={toggleProfile}>
            <HiOutlineUserCircle size={30} color="#fff"/>
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-white">Orders</span>
          <button className="p-1 px-3 text-center text-white rounded-md bg-[#494747]">Create</button>
        </div>
        <div className="container mx-auto py-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-[#f5f5f5e1]  ">
          <thead>
            <tr className=" text-left border-b-[1px] border-[#ffffff30]">
              <th className="cell">Order Number</th>
              <th className="cell">Purchase Date</th>
              <th className="cell">Customer</th>
              <th className="cell">Event</th>
              <th className="cell text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className=" border-b-[1px] border-[#ffffff30]">
                <td className="cell">{order.orderNumber}</td>
                <td className="cell text-[#ffffff6f]">{order.date}</td>
                <td className="cell">{order.customer}</td>
                <td className="cell">{order.event}</td>
                <td className="cell text-right">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </>
  );
};

export default Dashboard;
