// Profile.tsx
import React from "react";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { MdFeedback } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";

interface ProfileSectionProps {
  show: boolean;
  position: "top" | "bottom";
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ show, position }) => {
  if (!show) return null;

  return (
    <div
      className={`px-4 w-60 rounded-md bg-[#171616fb] text-white ${
        position === "top"
          ? "absolute top-24 right-8"
          : "absolute z-50 bottom-16  left-2"
      }`}
    >
      <ul>
        <li className="li-icon">
          <HiUserCircle className="size-5" />
          <span>My Account</span>
        </li>
        <div className="h-[1px] bg-gray-500"></div>
        <li className="li-icon">
          <MdOutlinePrivacyTip className="size-5"/>
          <span>Privacy Policy</span>
        </li>
        <li className="li-icon">
          <MdFeedback className="size-5"/>
          <span>Share Feedback</span>
        </li>
        <div className="h-[1px] bg-gray-500"></div>
        <li className="li-icon">
          <LiaSignOutAltSolid className="size-5"/>
          <span>Sign Out</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSection;
