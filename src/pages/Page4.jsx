import React from "react";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import Line from "../assets/line.svg";
import { Link } from "react-router-dom";

function Page4() {
  return (
    <div className="p-8 h-screen w-screen">
      <div className="mt-6 flex flex-col gap-y-2 h-[65%]">
        <h1 className="text-xl font-semibold font-roboto flex mr-auto my-4">
          Welcome Back
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="my-2 w-full bg-[#F1F1F1] rounded-2xl text-sm p-4 font-mont outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-2 w-full bg-[#F1F1F1] rounded-2xl text-sm p-4 font-mont outline-none"
        />
        <p className="font-mont font-medium text-xs text-[#7f7f7f] text-left underline pl-1">
          Forgot your password?
        </p>
      </div>

      <div className="flex flex-col gap-8 h-[35%]">
        <Link to="/page5">
          <button className="w-full bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] rounded-2xl text-base font-semibold text-white p-4 font-mont cursor-pointer">
            Sign In
          </button>
        </Link>

        <div className="flex mx-auto">
          <img src={Line} alt="line" className="w-[140px]" />
          <p className="px-4 font-mont text-xs font-medium">Or</p>
          <img src={Line} alt="line" className="w-[140px]" />
        </div>

        <div className="flex items-center justify-center gap-x-4">
          <Link to="/page5">
            <button className="cursor-pointer">
              <img
                src={Google}
                alt="google"
                className="border-2 rounded-xl p-4 border-[#7F7F7F]"
              />
            </button>
          </Link>
          <Link to="/page5">
            <button className="cursor-pointer">
              <img
                src={Facebook}
                alt="facebook"
                className="border-2 rounded-xl py-4 px-[1.3rem] border-[#7F7F7F]"
              />
            </button>
          </Link>
        </div>
        <p className="font-mont font-medium text-xs">
          Don't have an account?{" "}
          <Link to="/page5">
            <span className="underline text-[#819CFF]">Create an Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page4;
