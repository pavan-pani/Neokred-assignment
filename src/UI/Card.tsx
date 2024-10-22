import React, { memo } from "react";

interface CardData {
  title: string;
  amount: string;
  percentageChange: string;
  changeColor: string;
}

const Card: React.FC<CardData> = memo(
  ({ title, amount, percentageChange, changeColor }) => {
    console.log(changeColor);
    return (
      <div className="flex flex-col py-4 gap-4 border-t border-gray-500 w-[17rem]">
        <span className="text-[#e7e7e7]">{title}</span>
        <span className="text-3xl font-bold text-[#e7e7e7]">{amount}</span>
        <div className="flex items-center gap-1">
          <div className={`${changeColor} py-[1px] px-[4px] rounded-md`}>
            {percentageChange}
          </div>
          <div className="text-gray-400">from last week</div>
        </div>
      </div>
    );
  }
);

export default Card;
