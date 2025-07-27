/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Collection from "./Collection";
import TopRestaurant from "./TopRestaurant";
import RestaurantContainer from "./RestaurantContainer";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantapiCall } from "../utils/util";

const Body = () => {
  const dispatch = useDispatch();
  const restaurant = useSelector((store) => store?.restaurant?.restaurant[0]);

  useEffect(() => {
    RestaurantapiCall({ dispatch });
  }, []);

  return (
    <div className={"overflow-hidden py-12 px-24 "}>
      <Collection restaurant={restaurant} />
      <TopRestaurant restaurant={restaurant} />
      <RestaurantContainer restaurant={restaurant} />
    </div>
  );
};

export default Body;
