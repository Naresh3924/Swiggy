import React from "react";

const CollectionShimmer = () => {
  return (
    <div>
      <div className=" px-1 my-3 rounded border border-slate-200 w-68 animate-pulse dark:bg-gray-50">
        <div className="flex  py-2 px-8">
          <div className="flex-shrink-0 w-40 h-36 rounded-full dark:bg-gray-200"></div>
        </div>
        <div className="p-4 sm:px-10">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-32 mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CollectionShimmer;
