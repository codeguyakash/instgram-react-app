import React from "react";
import SideNav from "../components/SideNav";
import userprofilepic from "../utils/userprofilepic.jpg";
import Header from "./../components/Header";
import Posts from "./../components/Posts";

const HomePage = () => {
  return (
    <>
      <SideNav />
      <Header />
      <div className="flex justify-center">
        <Posts />
      </div>
    </>
  );
};

export default HomePage;
