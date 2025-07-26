import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import useRestaurantCollection from "../utils/useRestaurantCollection";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";

const RestaurantContainer = () => {
  const shimmer = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  const { RestaurantInfo, RestaurantInfoHeader } = useRestaurantCollection();
  return (
    <>
      <div className="flex flex-wrap justify-between">
        {RestaurantInfo?.length === 0 &&
          shimmer?.map((i) => (
            <div className="flex flex-wrap">
              <Shimmer i={i.id} />
            </div>
          ))}
      </div>
      <div className="w-3/3  ">
        <h1 className="font-bold text-2xl my-4">
          {RestaurantInfoHeader.title}
        </h1>
        <Link to="/restaurantmenu">
          <div className="flex flex-wrap justify-between mx-2  ">
            {RestaurantInfo.map((item) => (
              <RestaurantCard key={item.info.id} resInfo={item} />
            ))}
          </div>
        </Link>
      </div>
    </>
  );
};

export default RestaurantContainer;
