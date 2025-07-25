import React from "react";
import { RES_URL } from "../utils/content";

const TopListRes = ({ topResInfo }) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = topResInfo;

  return (
    <div className="min-w-[200px] min-h-[300px]">
      <img
        className="w-[200px] h-[150px] rounded-lg"
        src={RES_URL + cloudinaryImageId}
        alt={name}
      />
      <h2 className="font-semibold">{name}</h2>
      <p>⭐ {avgRating}</p>
      <p className="text-sm text-gray-500">{cuisines.join(", ")}</p>
    </div>
  );
};

export default TopListRes;
