import React from "react";
import { FaRegHeart } from "react-icons/fa";
import post from "../utils/post.png";
import userprofilepic from "../utils/userprofilepic.jpg";
import { IoChatbubbleOutline } from "react-icons/io5";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";
import { VscSmiley } from "react-icons/vsc";

const Post = () => {
  return (
    <div className="mt-3 mx-auto w-[480px] relative">
      <div className="flex">
        <div className="user-status w-14 h-14 rounded-full border-[2px] border-blue-500 my-1 flex mr-2">
          <img src={userprofilepic} alt="user-pic" className="rounded-full" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="absolute right-0 text-[8px] text-gray-600">●●●</span>
          <p className="text-[15px] font-semibold">
            codeguyakash
            <span className="days text-[14px] text-gray-500 font-normal">
              ● 33 min.
            </span>
          </p>
          <p className="text-[15px]">
            codeguyakash
            <span className="songs text-[14px] text-gray-700">
              ● hua main..
            </span>
          </p>
        </div>
      </div>
      <div>
        <img src={post} alt="post" />
      </div>
      <div className="flex justify-between mt-3 mb-1">
        <div className="flex gap-2 text-2xl">
          <FaRegHeart />
          <IoChatbubbleOutline />
          <PiPaperPlaneTilt />
        </div>
        <div className="text-2xl">
          <FiBookmark />
        </div>
      </div>
      <span className="text-[13px] font-semibold">59,324 likes</span>
      <div className="mt-1">
        <p className="text-[13px] font-normal">
          <span className="text-[14px] font-semibold">codeguyakash </span>A
          bench led by Justice Sheel Nagu quashed and set aside a judgment of a
          family court which refused to grant divorce.
        </p>
        <div>
          <p className="text-[13px] text-gray-600 mt-1">
            view all 949 comments
          </p>
          <p className="text-[13px] text-gray-600 mt-1 mb-4 relative">
            Add a comment...
            <span>
              <VscSmiley className="inline  absolute right-0" />
            </span>
          </p>
        </div>
      </div>
      <div className="bg-gray-200 w-auto h-[1px]"></div>
    </div>
  );
};

export default Post;
