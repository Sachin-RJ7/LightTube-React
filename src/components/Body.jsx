import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex w-full bg-black">
        <SideBar />
        <MainContainer />
    </div>
  );
};

export default Body;
