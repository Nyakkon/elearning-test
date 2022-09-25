import React, { useState } from "react";
import {
  ShoppingCartIcon,
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import SubNav from "./SubNav/SubNav";
import style from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";

import useHover from "../../CustomHook/useHover";

export default function Navbar(props) {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const [hoverRef, isHovered] = useHover();
  const {userLogin} = useSelector((state) => state.quanLyLogin);
  return (
    <div>
      <div className="flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4 ">
        <MenuIcon className="h-6 w-6 md:hidden" />
        <h2 className="text-3xl">Udemy</h2>
        <button
          className={`text-sm md:block z-10 relative ${style.abcd}`}
          ref={hoverRef}
          style={{ padding: "10px 0" }}
        >
          Categories
          <div
            className="absolute  elementToFadeInAndOut pt-10"
            style={{
              top: "15px",
              minWidth: "140px",
              display: isHovered ? "block" : "none",
            }}
          >
            <SubNav />
          </div>
        </button>
        {/* <SubNav /> */}
        <form className="hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center">
          <SearchIcon className="h-5 w-5 mx-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-transparent text-sm flex-1 h-full"
          />
        </form>
        <h3 className="hidden text-sm lg:block">Udemy Business</h3>
        <NavLink to="/profile" className="hidden text-sm lg:block md:hidden">
          Profile
        </NavLink>
        <div className="flex">
          <SearchIcon className="h-6 w-6 text-gray-400 md:hidden" />
          <ShoppingCartIcon className="h-6 w-6" />
        </div>
        <div className="hidden md:flex pr-4 space-x-4 justify-end">
          {userLogin.accessToken ? (
            <p>Hi, {userLogin.hoTen} </p>
          ) : (
            <>
              <NavLink
                to="/login"
                className="border border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5]"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                style={{ color: "white !important" }}
                className="border bg-slate-100 text-white border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5]"
              >
                Sign up
              </NavLink>
            </>
          )}

          <button className="border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]">
            <GlobeAltIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
