import React from "react";
import { RES_URL } from "../../utils/constant";
import PropTypes from "prop-types";

const TopListRes = ({ topResInfo }) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = topResInfo || {};

  return (
    <div className="min-w-[200px] min-h-[260px] shadow my-2 rounded-lg">
      <img
        className="w-[200px] h-[150px] rounded-lg"
        src={RES_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-2">
        <h2 className="font-semibold">{name}</h2>
        <p>⭐ {avgRating}</p>
        <p className="text-sm text-gray-500">
          {cuisines?.join(", ").slice(0, 50)}
        </p>
      </div>
    </div>
  );
};

TopListRes.propTypes = {
  topResInfo: PropTypes.object,
};

export default TopListRes;
