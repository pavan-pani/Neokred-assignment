import React, { Suspense, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
const ProfileSection = React.lazy(() => import("./Profile"));
const Sidebar = React.lazy(() => import("./Sidebar"));
import orders from "../utility/orders.json";
const Card = React.lazy(() => import("../UI/Card"));

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const cardData = [
    {
      title: "Total revenue",
      amount: "$2.6M",
      percentageChange: "+4.5%",
      changeColor: "bg-[#60fe5169] text-[#6ffe32]",
    },
    {
      title: "Avarge order value",
      amount: "$446",
      percentageChange: "-0.5%",
      changeColor: "bg-[#fe515169] text-[#fe5732]",
    },
    {
      title: "Tickets sold",
      amount: "5,888",
      percentageChange: "+4.5%",
      changeColor: "bg-[#60fe5169] text-[#6ffe32]",
    },
    {
      title: "Pageviews",
      amount: "850,159",
      percentageChange: "+21%",
      changeColor: "bg-[#60fe5169] text-[#6ffe32]",
    },
  ];

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <ProfileSection show={showProfile} position="top" />
      <div className="py-3 px-8 md:ml-64 overflow-auto w-screen bg-[#303030]">
        <h6 className="text-[#dcdcdc] mt-2 mb-5 ">Good Morning, Pavan</h6>
        <div className="flex justify-between items-center rounded-sm">
          <button
            aria-label="Hamburger Menu"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <RxHamburgerMenu size={20} color="#fff" />
          </button>
          <button
            aria-label="user"
            className="md:hidden"
            onClick={toggleProfile}
          >
            <HiOutlineUserCircle size={30} color="#fff" />
          </button>
        </div>

        <div className="flex justify-between py-3">
          <span className="text-white text-2xl">Overview</span>
          <button className="p-1 flex justify-between gap-4 items-center px-3 text-center text-white rounded-md bg-[#494747]">
            Last week
            <span>
              <HiOutlineChevronUp size={10} />
              <HiOutlineChevronDown size={10} />
            </span>
          </button>
        </div>

        <div className="flex gap-6 flex-wrap justify-between ">
          {cardData.map((card, index) => (
            <Suspense fallback={
                <div className="text-center text-xl">Cards Loading...</div>
              }
            >
              <Card
                key={index}
                title={card.title}
                amount={card.amount}
                percentageChange={card.percentageChange}
                changeColor={card.changeColor}
              />
            </Suspense>
          ))}
        </div>

        <div className=" mx-auto py-4">
          <span className="text-xl font-bold text-white">Orders</span>
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
                  <tr
                    key={index}
                    className=" border-b-[1px] border-[#ffffff30]"
                  >
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
