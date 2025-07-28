import React from "react";

const CollectionShimmer = () => {
  return (
    <div>
    <div className=" px-1 my-3 rounded border border-slate-300 w-68 animate-pulse dark:bg-gray-50">
      <div className="flex mx-4 p-2 space-x-4 sm:px-8">
        <div className="flex-shrink-0 w-40 h-36 rounded-full dark:bg-gray-300"></div>
      </div>
      <div className="p-4 sm:px-10">
        <div className="w-full h-4 rounded dark:bg-gray-300"></div>
      </div>
    </div>
    </div>
  );
};

export default CollectionShimmer;
