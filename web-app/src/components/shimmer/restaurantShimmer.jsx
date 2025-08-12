import React from "react";
const RestaurantShimmer = () => {
  return (
    <div className=" w-60 h-80 space-x-6  bg-slate-50  rounded-lg m-2">
      <div className="w-54 h-48  rounded-lg  bg-gray-200" />
      <div className="flex mx-5 my-2 ">
        <svg
          className="w-10 h-10  text-gray-200 dark:text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div className="p-2">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-32 mb-2"></div>
          <div className="w-40 h-2.5 bg-gray-200 rounded-full dark:bg-gray-200"></div>
        </div>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-32 mb-2"></div>
      <div className="w-40 h-2.5 bg-gray-200 rounded-full dark:bg-gray-200"></div>
    </div>
  );
};

export default RestaurantShimmer;
