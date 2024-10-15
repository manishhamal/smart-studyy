"use client";

import semesterData from "@/data/semesters.json"; // Ensure path is correct
import SemesterCard from "./SemesterCard";
import { Link } from "react-router-dom";

// TypeScript minimal typing for semester data
type Semester = {
  semester: string;
  subjects: string[];
};

const SemesterWiseNotes = () => {
  return (
    <div className="">
      <div className="border border-green-600 mx-10 mb-[52px]">
        <h1 className="text-[42px] text-center font-bold">
          Semester Wise <span className="text-green-600">CSIT Notes</span>
        </h1>
        <p className="text-center text-[18px] mt-2">
          Complete semester wise notes for CSIT
        </p>
      </div>
      <div className="flex justify-evenly p-4 gap-8 flex-wrap ">
        {semesterData.map((semesterItem, index) => (
          <Link to={`/semester/${semesterItem.slug}`}>
            <SemesterCard
              key={index}
              title={semesterItem.sem}
              subtitle={semesterItem.subjectList.length}
              icon={semesterItem.icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SemesterWiseNotes;
