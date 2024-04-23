import React from "react";
import Navbar from "../components/Navbar";
import Left from "../assets/left.svg";
import L from "../assets/l.svg";
import R from "../assets/r.svg";
import Plus from "../assets/plus.svg";
import { Link } from "react-router-dom";

function Page7() {
  return (
    <>
      <div className="p-8 h-screen w-screen relative">
        <div className="flex justify-start items-start gap-14">
          <Link to="/page6">
            <img src={Left} className="mt-1 cursor-pointer" />
          </Link>
          <h1 className="font-mont font-semibold text-[20px] mb-2 align-middle ">
            Workout Schedule
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src={L} className="cursor-pointer" />
          <p className="font-mont font-semibold text-xs">Feb 2024</p>
          <img src={R} className="cursor-pointer" />
        </div>
        <div className="font-quicksand font-semibold flex justify-evenly items-center mt-8">
          <div className="rounded-xl px-4 pt-2 pb-6 text-sm leading-normal cursor-pointer">
            Sun <br />
            <span className="text-[29px]">5</span>
          </div>
          <div className="bg-gradient-to-r from-[#8da4ff] to-[#d1dbff] rounded-xl px-4 pt-2 pb-6 text-sm leading-normal cursor-pointer">
            Mon <br />
            <span className="text-[29px]">6</span>
          </div>
          <div className="rounded-xl px-4 pt-2 pb-6 text-sm leading-normal cursor-pointer">
            Tue <br />
            <span className="text-[29px]">7</span>
          </div>
          <div className="rounded-xl px-4 pt-2 pb-6 text-sm leading-normal cursor-pointer">
            Wed <br />
            <span className="text-[29px]">8</span>
          </div>
          <div className="rounded-xl px-4 pt-2 pb-6 text-sm leading-normal cursor-pointer">
            Thu <br />
            <span className="text-[29px]">9</span>
          </div>
        </div>

        <div className="font-mont text-left mt-6 mb-4">
          <p className="font-semibold text-sm">06:00 AM</p>
        </div>
        <hr />
        <div className="font-mont text-left my-4 ">
          <p className="font-semibold text-sm">07:00 AM</p>
        </div>
        <hr />
        <div className="font-mont text-left my-4">
          <p className="font-semibold text-sm">08:00 AM</p>
        </div>
        <hr />
        <div className="font-mont text-left my-4">
          <p className="font-semibold text-sm">09:00 AM</p>
        </div>
        <hr />
        <div className="font-mont text-left my-4">
          <p className="font-semibold text-sm">10:00 AM</p>
        </div>
        <hr />
        <div className="font-mont text-left my-4">
          <p className="font-semibold text-sm">11:00 AM</p>
        </div>
        <hr />
        <div className="font-mont text-left my-4">
          <p className="font-semibold text-sm">12:00 PM</p>
        </div>
        <hr />
        <div className="font-mont text-left my-4">
          <p className="font-semibold text-sm">01:00 PM</p>
        </div>
        <hr />
        <div className="font-mont text-left my-4">
          <p className="font-semibold text-sm">02:00 PM</p>
        </div>
        <hr />
        <div className="font-mont text-left my-4">
          <p className="font-semibold text-sm">03:00 PM</p>
        </div>
        <hr />

        <button className="bg-gradient-to-r from-[#e9b1e0] to-[#d3a5f2] p-4 rounded-full absolute bottom-[7.7rem] right-10 cursor-pointer">
          <img src={Plus} className="" />
        </button>
        <p className="bg-gradient-to-r from-[#e9b1e0] to-[#d3a5f2] text-white font-semibold text-xs text-center py-2 px-4 rounded-2xl absolute right-10 top-[19.5rem] font-mont">
          Ab Workout, 7:30am
        </p>
        <p className="bg-gradient-to-r from-[#e9b1e0] to-[#d3a5f2] text-white font-semibold text-xs text-center py-2 px-4 rounded-2xl absolute right-20 top-[25.5rem] font-mont">
          Upperbody Workout, 9am
        </p>
        <p className="bg-[#f1f1f1] text-black font-semibold text-xs text-center py-2 px-4 rounded-2xl absolute right-20 top-[37.7rem] font-mont">
          Lowerbody Workout, 3pm
        </p>
      </div>
      <Navbar />
    </>
  );
}

export default Page7;
