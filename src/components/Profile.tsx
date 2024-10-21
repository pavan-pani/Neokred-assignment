// Profile.tsx
import React from 'react';
import { MdOutlinePrivacyTip } from "react-icons/md";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { MdFeedback } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";

interface ProfileSectionProps {
  show: boolean; // Determines visibility
  position: 'top' | 'bottom'; // Allows for different positioning
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ show, position }) => {
  if (!show) return null;

  return (
    <div className={`px-4 w-60 rounded-md bg-[#1f1f1f] text-white ${position === 'top' ? 'absolute top-16 right-2' : 'absolute z-50 bottom-16  left-2'}`}>
      <ul>
        <li className="li-icon flex items-center py-2">
          <HiUserCircle className="size-6" />
          <span className="ml-2">My Account</span>
        </li>
        <div className="h-[1px] bg-gray-500"></div>
        <li className="li-icon flex items-center py-2">
          <MdOutlinePrivacyTip />
          <span className="ml-2">Privacy Policy</span>
        </li>
        <li className="li-icon flex items-center py-2">
          <MdFeedback />
          <span className="ml-2">Share Feedback</span>
        </li>
        <div className="h-[1px] bg-gray-500"></div>
        <li className="li-icon flex items-center py-2">
          <LiaSignOutAltSolid />
          <span className="ml-2">Sign Out</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSection;
