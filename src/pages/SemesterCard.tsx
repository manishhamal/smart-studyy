"use client";
import * as FaIcons from "react-icons/fa";

const SemesterCard = ({ title, subtitle, icon }) => {
  const IconComponent = FaIcons[icon];

  return (
    <div className="flex items-center gap-4 border-2 border-green-600 bg-green-200 w-72 rounded-md p-4 h-40">
      <div className="text-4xl text-black">
        {IconComponent && <IconComponent />}
      </div>
      <div className="">
        <h2 className="text-black font-bold">{title}</h2>
        <p className="text-gray-700">{subtitle} Subjects</p>
      </div>
    </div>
  );
};

export default SemesterCard;
