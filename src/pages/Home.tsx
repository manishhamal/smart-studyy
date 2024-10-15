import SearchBar from "@/components/customComponents/SearchBar";
import Header from "@/layouts/Header";
import Hero from "@/assets/images/hero.svg";
import This from "@/assets/images/this.png";
import Lock from "@/assets/images/lock.png";
import SemesterWiseNotes from "./SemesterWiseNotes";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className=" bg-slate-100">
        <div className="landingpage flex justify-evenly max-w-[1380px] mx-auto mb-8">
          <div className="contentbox gap-20 m-8  grow">
            <p className="text-2xl mt-8">Embark on a New Learning Adventure</p>
            <h1 className="font-extrabold text-[48px] my-6 leading-tight">
              Best learning{" "}
              <span className="text-green-600">
                platform <br /> to Prepare
              </span>{" "}
              for CSIT
              <br /> Semester Exams
            </h1>
            <p className="text-xl">
              Complete resources to help you excel in B.Sc. CSIT.
            </p>
            <SearchBar value={inputValue} setValue={setInputValue} />
          </div>
          <div className="  ">
            <img src={Hero} className="w-[650px] h-auto " />
          </div>
        </div>

        {/* Semester wise notes section */}
        <div className="max-w-[1380px] mx-auto py-12">
          <SemesterWiseNotes />
        </div>

        {/* Contribute Section */}
        <div className="contributeSection  bg-blue-100">
          <div className="py-[52px] flex justify-evenly ">
            <div className="">
              <div>
                <h1 className="text-[32px] font-semibold">
                  CONTRIBUTE TO HAMRO PATRO
                </h1>
                <p className="text-[20px]">
                  Contribute on CSIT Notes and helps the begineer to find out
                  the notes, question bank and solutions.
                </p>
              </div>
              <div className="my-8">
                <Button className="px-8 py-6 font-medium text-xl">
                  Contribute your notes here
                </Button>
              </div>
            </div>
            <div>
              <img src={Lock} className="w-[200px] h-auto " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
