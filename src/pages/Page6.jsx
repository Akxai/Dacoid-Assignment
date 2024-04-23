import React from "react";
import { Link } from "react-router-dom";
import Left from "../assets/left.svg";
import Chart from "../assets/chart.svg";
import Alert from "../assets/alert.svg";
import Ex1 from "../assets/ex1.svg";
import Ex2 from "../assets/ex2.svg";
import Toggle from "../assets/toggle.svg";
import Train from "../assets/training.svg";
import Navbar from "../components/Navbar";

function Page6() {
  return (
    <>
      <div className="p-8 h-screen w-screen">
        <div className="flex justify-start items-start gap-14">
          <Link to="/page5">
            <img src={Left} className="mt-1 cursor-pointer" />
          </Link>
          <h1 className="font-mont font-semibold text-[20px] mb-12 align-middle ">
            Workout Tracker
          </h1>
        </div>

        <img src={Chart} className="mt-4 mb-8" />
        <div className="bg-gradient-to-r from-[#9bb1ff] to-[#fff] rounded-xl flex justify-start items-center text-left p-4 gap-3 mb-12">
          <img src={Alert} className="w-12" />
          <p className="font-mont text-[12.57px] font-medium">
            You've burned fewer calories than yesterday. Time to get moving!{" "}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="font-mont font-semibold text-base">
            Upcoming Workout
          </h2>
          <Link to="/page7">
            <p className="font-mont font-medium text-xs text-[#7f7f7f] cursor-pointer">
              See more
            </p>
          </Link>
        </div>

        <div className="flex justify-between items-center shadow-lg rounded-xl p-4 mt-4">
          <div className="flex gap-4">
            <img src={Ex1} />
            <div className="flex flex-col gap-2 justify-center">
              <p className="font-mont font-medium text-xs">Full Body Workout</p>
              <p className="font-mont font-medium text-[10px] text-[#7f7f7f] text-left">
                Today 3pm
              </p>
            </div>
          </div>
          <img src={Toggle} className="cursor-pointer" />
        </div>
        <div className="flex justify-between items-center shadow-lg rounded-xl p-4 mt-3">
          <div className="flex gap-4">
            <img src={Ex2} />
            <div className="flex flex-col gap-2 justify-center">
              <p className="font-mont font-medium text-xs">
                Upper Body Workout
              </p>
              <p className="font-mont font-medium text-[10px] text-[#7f7f7f] text-left">
                4 Feb, 3:30 pm
              </p>
            </div>
          </div>
          <img src={Toggle} className="cursor-pointer" />
        </div>
        <h2 className="font-mont font-semibold text-base text-left mt-8 mb-4">
          What Do You Want to Train
        </h2>
        <div className="bg-[#8CB1FF99] rounded-xl flex justify-between p-4">
          <div className="font-mont flex flex-col gap-2 text-left">
            <p className="font-medium text-xs">Full Body Workout</p>
            <p className="text-[10px] font-medium">Arms</p>
            <p className="text-[10px] font-medium">Chest</p>
          </div>
          <div>
            <img src={Train} />
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Page6;
