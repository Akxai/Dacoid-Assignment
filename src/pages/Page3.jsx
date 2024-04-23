import React from "react";
import Line from "../assets/line.svg";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";

function Page3() {
  return (
    <div className="p-8 h-screen w-screen">
      <div className="mt-6 flex flex-col gap-y-2 h-[65%]">
        <h1 className="text-xl font-semibold font-roboto flex mr-auto my-4">
          Create an account
        </h1>
        <input
          type="text"
          placeholder="First Name"
          className="my-2 w-full bg-[#F1F1F1] rounded-2xl text-sm p-4 font-mont outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="my-2 w-full bg-[#F1F1F1] rounded-2xl text-sm p-4 font-mont outline-none"
        />
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
        <div className="flex justify-start items-center mt-4 font-mont">
          <label
            for="checkbox"
            className="font-mont font-medium text-[11.5px] text-left flex justify-center items-center"
          >
            <input
              type="checkbox"
              id="checkbox"
              className="cursor-pointer mr-2"
            />
            By proceeding, I agree to all
            <span className="underline text-[#9FB2FF] mx-0.5 cursor-pointer">
              T&C
            </span>
            and
            <span className="underline text-[#9FB2FF] mx-0.5 cursor-pointer">
              Privacy Policy
            </span>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-8 h-[35%]">
        <Link to="/page4">
          <button className="w-full bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] rounded-2xl text-base font-semibold text-white p-4 font-mont cursor-pointer">
            Create an Account
          </button>
        </Link>

        <div className="flex mx-auto">
          <img src={Line} alt="line" className="w-[140px]" />
          <p className="px-4 font-mont text-xs font-medium">Or</p>
          <img src={Line} alt="line" className="w-[140px]" />
        </div>

        <div className="flex items-center justify-center gap-x-4">
          <Link to="/page4">
            <button className="cursor-pointer">
              <img
                src={Google}
                alt="google"
                className="border-2 rounded-xl p-4 border-[#7F7F7F]"
              />
            </button>
          </Link>
          <Link to="/page4">
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
          Already have an account?{" "}
          <Link to="/page4">
            <span className="underline text-[#819CFF]">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page3;
