import React from "react";
import Cycle from "../assets/cycle.svg";
import Next2 from "../assets/next2.svg";
import { Link } from "react-router-dom";

function Page2() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen lg:px-[28rem] md:px-[28rem]">
      <div className="p-8 font-mont">
        <Link to="/page3">
          <button className="flex ml-auto cursor-pointer">
            <p className="underline text-[#9FB2FF] font-medium text-base font-mont">
              Skip
            </p>
          </button>
        </Link>
        <img
          src={Cycle}
          className="my-[7.5rem] flex justify-center items-center mx-auto"
          alt="run-img"
        />
        <h1 className="font-semibold text-xl flex mr-auto text-[20px] my-4">
          Get Burn
        </h1>
        <p className="text-[#787878] font-medium text-base text-left leading-[19.5px]">
          Let’s keep burning to achieve your goals, it hurts only temporarily,
          if you give up now you will be in pain forever.
        </p>
      </div>
      <div className="flex justify-end ml-auto p-8">
        <Link to="/page3">
          <button className="cursor-pointer">
            <img src={Next2} alt="Next-img" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page2;
