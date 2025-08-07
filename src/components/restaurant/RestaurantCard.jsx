import React from "react";
import { RES_URL } from "../../utils/constant";
import PropTypes from "prop-types";

const RestaurantCard = ({ resInfo }) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = resInfo?.info || {};
  return (
    <div className=" w-64 h-80 space-x-6 cusomShadow my-2 rounded-lg mx-1">
      <img
        className="w-[275px] h-[200px]  rounded-lg"
        alt="res-info"
        src={RES_URL + cloudinaryImageId}
      />
      <div className="py-2">
        <h2 className="font-semibold">{name}</h2>
        <p>⭐ {avgRating}</p>
        <p className="text-sm font-semibold text-gray-500">
          {cuisines?.join(", ").slice(0, 50)}
        </p>
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  resInfo: PropTypes,
};

export default RestaurantCard;
