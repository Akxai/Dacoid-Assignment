import React from "react";
import Home from "../assets/home.svg";
import Stats from "../assets/stats.svg";
import Camera from "../assets/camera.svg";
import Profile from "../assets/prof.svg";
import Search from "../assets/search.svg";

function Navbar() {
  return (
    <div className="px-4 py-1 fixed w-full bottom-0 z-100 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex justify-evenly items-center w-[50%] gap-4">
          <img src={Home} className="cursor-pointer" />
          <img src={Stats} className="cursor-pointer" />
        </div>
        <img
          src={Search}
          className="cursor-pointer relative bottom-8 drop-shadow-md"
        />
        <div className="flex justify-evenly items-center w-[50%] gap-4">
          <img src={Camera} className="cursor-pointer" />
          <img src={Profile} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
