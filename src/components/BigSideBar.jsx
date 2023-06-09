import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BigSideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <aside
      className={`right-0 hidden bg-black px-4 text-white transition-all duration-300 ease-in-out md:absolute md:-top-3 md:z-50  md:block md:w-[220px] lg:fixed lg:top-[60px] ${
        isMenuOpen === true ? "left-0" : "left-[-220px]"
      } ${isMenuOpen === false ? "lg:hidden" : ""} lg:w-[250px] `}
    >
      <ul className="flex flex-col border-b-2 border-solid border-white/[0.4] pb-3">
        <Link className="transition-bg mb-1 mt-2  flex items-center rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa-solid fa-house mr-6 text-white"></i>
          <span>Home</span>
        </Link>
        <Link className="transition-bg mb-1  flex items-center rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-play mr-7 text-white"></i>
          <span>Shorts</span>
        </Link>
        <Link className="transition-bg mb-1 flex  items-center rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-money-bill mr-6"></i>
          <span>Subscription</span>
        </Link>
      </ul>
      <ul className="flex flex-col border-b-2 border-solid border-white/[0.4] pb-3 pt-3">
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-photo-film mr-6"></i>
          <span>Library</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-clock-rotate-left mr-6"></i>
          <span>History</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-play mr-7"></i>
          <span>Your vidoes</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa-regular fa-clock mr-6"></i>
          <span>Watch later</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa-solid fa-scissors mr-6"></i>
          <span>Your clips</span>
        </Link>
      </ul>
      <span className="bold mt-4 inline-block text-lg text-white">Explore</span>
      <ul className="mt-3 flex flex-col">
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa-solid fa-fire mr-6"></i>
          <span>Trending</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-bag-shopping mr-6"></i>
          <span>Shopping</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-music mr-6"></i>
          <span>Music</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-film mr-6"></i>
          <span>Movies & Shows</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-signal mr-6"></i> <span>Live</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-gamepad mr-6"></i>
          <span>Gaming</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa-solid fa-newspaper mr-6"></i>
          <span>News</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa-solid fa-trophy mr-6"></i>
          <span>Sports</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa-solid fa-lightbulb mr-6"></i>
          <span>Learning</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa-solid fa-shirt mr-5"></i>
          <span>Fashion & Beauty</span>
        </Link>
      </ul>
    </aside>
  );
};

export default BigSideBar;
