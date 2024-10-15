import React from "react";
import { BookOpen, ChevronRight } from "lucide-react";

const SubjectCard = ({ title, subtitle }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col w-full sm:w-[calc(33.333%-1rem)]">
      {/* Card Header */}
      <div className="bg-gray-700 p-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-center text-white">
          <BookOpen size={20} className="mr-2" />
          <span className="text-sm">Course Overview</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-grow bg-gray-100">
        <p className="text-gray-700 text-sm">{subtitle}</p>
      </div>

      {/* Card Footer */}
      <div className="px-4 py-3 bg-gray-200">
        <button className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300 flex items-center justify-center">
          Learn More
          <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};
export default SubjectCard;
