import axios from "axios";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
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
  console.log(users);

  return (
    <>
      <div className="w-auto h-96 bg-[#19646e] pt-20 pl-48">
        <h2 className="text-7xl font-semibold text-[#e6f5f0]">
          Facebook Community
          <br />
          Standards
        </h2>
        <h3 className="text-[20px] text-[#e6f5f0]">
          The Facebook Community Standards outline what is and isn't allowed on{" "}
          <br />
          Facebook.
        </h3>
      </div>
      <div className="w-auto h-auto flex pl-48 pt-10 flex-wrap gap-6">
        {users.map((user, index) => {
          return (
            <div
              key={index}
              className="w-96 min-h-56 border-2 border-gray-100 rounded-md shadow-md p-3"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-1xl border-2 w-max px-3 py-1 rounded-md">
                  {user.id}
                </h2>
              </div>
              <h2 className="text-1xl font-bold">Title: {user.title}</h2>
              <p className="text-justify ">{user.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
