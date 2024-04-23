import React from "react";
import { Link } from "react-router-dom";
import Box from "../assets/box.svg";

function Page5() {
  return (
    <div className="p-8 h-screen w-screen">
      <div className="h-[90%] w-full">
        <h1 className="font-mont font-semibold text-[20px] mb-12">
          What are your goals?
        </h1>
        <div className="bg-[#f1f1f1] rounded-lg text-left w-full px-3 py-4 mt-8 flex justify-between items-center">
          <p className="font-mont font-semibold text-sm">Weight Loss</p>
          <img src={Box} />
        </div>
        <div className="bg-[#f1f1f1] rounded-lg text-left w-full px-3 py-4 mt-4 flex justify-between items-center">
          <p className="font-mont font-semibold text-sm">Muscle Gain</p>
          <img src={Box} />
        </div>
        <div className="bg-[#f1f1f1] rounded-lg text-left w-full px-3 py-4 mt-4 flex justify-between items-center">
          <p className="font-mont font-semibold text-sm">
            Flexibility and Mobility
          </p>
          <img src={Box} />
        </div>
        <div className="bg-[#f1f1f1] rounded-lg text-left w-full px-3 py-4 mt-4 flex justify-between items-center">
          <p className="font-mont font-semibold text-sm">General Fitness</p>
          <img src={Box} />
        </div>
        <div className="bg-[#f1f1f1] rounded-lg text-left w-full px-3 py-4 mt-4 flex justify-between items-center">
          <p className="font-mont font-semibold text-sm">
            Event - Specific Training
          </p>
          <img src={Box} />
        </div>
        <div className="bg-[#f1f1f1] rounded-lg text-left w-full px-3 py-4 mt-4 flex justify-between items-center">
          <p className="font-mont font-semibold text-sm">
            Mindfulness and Mental Health
          </p>
          <img src={Box} />
        </div>
      </div>

      <div className="h-[10%] w-full">
        <Link to="/page6">
          <button className="w-full bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] rounded-2xl text-base font-semibold text-white p-4 font-mont cursor-pointer">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page5;
