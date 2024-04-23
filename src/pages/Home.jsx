import React from "react";
import Run from "../assets/run.svg";
import Next from "../assets/next.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen lg:px-[28rem] md:px-[28rem]">
      <div className="p-8 font-mont">
        <Link to="/page2">
          <button className="flex ml-auto cursor-pointer">
            <p className="underline text-[#9FB2FF] font-medium text-base font-mont">
              Skip
            </p>
          </button>
        </Link>
        <img
          src={Run}
          className="my-14 flex justify-center items-center mx-auto"
          alt="run-img"
        />
        <h1 className="font-semibold text-xl flex mr-auto text-[20px] my-4">
          Track Your Goal
        </h1>
        <p className="text-[#787878] font-medium text-base text-left leading-[19.5px]">
          Don’t worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals.
        </p>
      </div>
      <div className="flex justify-end ml-auto p-8">
        <Link to="/page2">
          <button className="cursor-pointer">
            <img src={Next} alt="Next-img" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
