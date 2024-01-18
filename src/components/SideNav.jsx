import React from "react";
import { FiHome } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const SideNav = () => {
  return (
    <>
      <div className=" w-[245px] h-screen border-r-[1px] border-gray-300 flex flex-col justify-between fixed bg-white">
        <div>
          <div className="logo mt-8 mx-6">
            <div className="logo text-2xl">Instagram</div>
          </div>
          <ul className="mx-2 mt-12 text-[17px]">
            <li className=" hover:bg-gray-200 p-3 rounded-md flex cursor-pointer">
              <FiHome className="text-2xl mr-3 " />
              Home
            </li>
            <li className=" hover:bg-gray-200 p-3 rounded-md flex cursor-pointer">
              <IoSearch className="text-2xl mr-3 " />
              Search
            </li>
            <li className=" hover:bg-gray-200 p-3 rounded-md flex cursor-pointer">
              <FaRegCompass className="text-2xl mr-3 " />
              Explore
            </li>
            <li className=" hover:bg-gray-200 p-3 rounded-md flex cursor-pointer">
              <BiMoviePlay className="text-2xl mr-3 " />
              Reels
            </li>
            <li className=" hover:bg-gray-200 p-3 rounded-md flex cursor-pointer">
              <RiMessengerLine className="text-2xl mr-3 " />
              Mesages
            </li>
            <li className=" hover:bg-gray-200 p-3 rounded-md flex cursor-pointer">
              <FaRegHeart className="text-2xl mr-3 " />
              Notification
            </li>
            <li className=" hover:bg-gray-200 p-3 rounded-md flex cursor-pointer">
              <CgAddR className="text-2xl mr-3  font-bold" />
              Create
            </li>
            <li className=" hover:bg-gray-200 p-3 rounded-md flex cursor-pointer">
              <FaUserCircle className="text-2xl mr-3 " />
              Profile
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <ul className="mx-2 mt-10 text-[17px]">
            <li className=" hover:bg-gray-200 p-3 rounded-md cursor-pointer">
              <span className="text-2xl font-bold mr-3 ">@</span>
              Thread
            </li>
            <li className=" hover:bg-gray-200 p-3 rounded-md flex cursor-pointer ">
              <RxHamburgerMenu className="text-2xl mr-3 " />
              More
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
