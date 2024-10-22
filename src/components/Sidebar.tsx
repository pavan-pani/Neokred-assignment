import React, { useState } from "react";
import { CiHome, CiShoppingCart, CiSettings } from "react-icons/ci";
import {
  HiDocumentDuplicate,
  HiUserCircle,
  HiSparkles,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import {
  HiOutlineChevronUp,
  HiOutlineChevronDown,
  HiOutlineX,
} from "react-icons/hi";
const ProfileSection = React.lazy(() => import("./Profile"));

const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
  isOpen,
  toggleSidebar,
}) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNavItems, setNavItems] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`fixed z-30 inset-y-0 left-0 w-64 flex flex-col justify-between bg-black text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <button
          aria-label="close"
          onClick={toggleSidebar}
          className="md:hidden p-2 fixed top-1 right-2 pb-5"
        >
          <HiOutlineX />
        </button>
        <div>
          <div className="text-lg flex justify-between mt-4 md:mt-0 font-bold p-4">
            <span>Neo UI</span>
            <button
              aria-label="show/hide"
              onClick={() => setNavItems(!showNavItems)}
            >
              {showNavItems ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
            </button>
          </div>
          <div className="h-[1px] bg-gray-500"></div>
          {showNavItems && (
            <ul className="mt-4 px-4">
              <li className="li-icon">
                <CiHome className="size-5" />
                <span>Home</span>
              </li>
              <li className="li-icon">
                <HiDocumentDuplicate className="size-5" />
                <span>Events</span>
              </li>
              <li className="li-icon">
                <CiShoppingCart className="size-5" />
                <span>Orders</span>
              </li>
              <li className="li-icon">
                <CiSettings className="size-5" />
                <span>Settings</span>
              </li>
            </ul>
          )}
          <div className="p-4 text-zinc-500">Upcoming events</div>
          <ul className="px-4 flex flex-col gap-2">
            <li className="list">Bear Hug: Live in Concert</li>
            <li className="list">Six Fingers -- DJ set</li>
            <li className="list">We All Look Some</li>
            <li className="list">Viking People</li>
          </ul>
        </div>
        <div>
          <ul className="px-4">
            <li className="li-icon">
              <HiQuestionMarkCircle className="size-5" />
              <span>Support</span>
            </li>
            <li className="li-icon">
              <HiSparkles className="size-5" /> <span>Changelog</span>
            </li>
          </ul>
          <div className="h-[1px] my-2 bg-gray-500"></div>
          <button
            aria-label="profile"
            onClick={toggleProfile}
            className="cursor-pointer hidden md:block"
          >
            <div className="flex gap-1 pl-2">
              <HiUserCircle className="size-12" />
              <div className="flex flex-col">
                <span className="text-left">Pavan Kumar</span>
                <span className="text-gray-500 text-xs">goudara.pavan.kumar@gmail.com</span>
              </div>
            </div>
          </button>
        </div>
      </nav>
      <ProfileSection show={showProfile} position="bottom" />
    </>
  );
};

export default Sidebar;
