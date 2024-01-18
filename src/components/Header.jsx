import axios from "axios";
import React, { useEffect, useState } from "react";
import userprofilepic from "../utils/userprofilepic.jpg";

const Header = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => {
        const newUsers = response.data.filter(
          (newUser) =>
            !users.some((existingUser) => existingUser.id === newUser.id)
        );
        setUsers((prevUsers) => [...prevUsers, ...response.data]);
      });
  }, [page]);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(users);

  return (
    <>
      <div className="ml-[13%] w-[68%] border-2 flex justify-center items-center py-4">
        <div className="status flex justify-center gap-4">
          <div className="user-status w-20 h-20 rounded-full border-[3px] border-blue-500">
            <img src={userprofilepic} alt="user-pic" className="rounded-full" />
          </div>
          <div className="user-status w-20 h-20 rounded-full border-[3px] border-yellow-500">
            <img src={userprofilepic} alt="user-pic" className="rounded-full" />
          </div>
          <div className="user-status w-20 h-20 rounded-full border-[3px] border-green-500">
            <img src={userprofilepic} alt="user-pic" className="rounded-full" />
          </div>
          <div className="user-status w-20 h-20 rounded-full border-[3px] border-pink-500">
            <img src={userprofilepic} alt="user-pic" className="rounded-full" />
          </div>
          <div className="user-status w-20 h-20 rounded-full border-[3px] border-violet-500">
            <img src={userprofilepic} alt="user-pic" className="rounded-full" />
          </div>
          <div className="user-status w-20 h-20 rounded-full border-[3px] border-orange-500">
            <img src={userprofilepic} alt="user-pic" className="rounded-full" />
          </div>
          <div className="user-status w-20 h-20 rounded-full border-[3px] border-purple-500">
            <img src={userprofilepic} alt="user-pic" className="rounded-full" />
          </div>

          <div className="user-status w-20 h-20 rounded-full border-[3px] border-red-500">
            <img src={userprofilepic} alt="user-pic" className="rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
