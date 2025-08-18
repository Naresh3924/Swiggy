import React from "react";
import { Fragment, useEffect } from "react";
import Collection from "../components/collection/Collection";
import TopRestaurant from "../components/topRestaurant/TopRestaurant";
import RestaurantContainer from "../components/restaurant/RestaurantContainer";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantapiCall } from "../utils/util";
import Shimmer from "../components/shimmer";
import { updateFooter, updateHeader } from "../redux/slice/restaurantSlice";
import BestPlaceContainer from "../components/bestCard/bestPlace";
import BestCuisinesContainer from "../components/bestCard/bestCuisines";
import BestRestaurantContainer from "../components/bestCard/bestRestaurant";

const Body = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store?.isLoading?.isLoading);
  const restaurant = useSelector((store) => store?.restaurant?.restaurant[0]);

  useEffect(() => {
    RestaurantapiCall({ dispatch });
    dispatch(updateHeader(false));
    dispatch(updateFooter(false));
  }, []);

  return (
    <Fragment>
      <div className={"overflow-hidden py-12 px-24 "}>
        {isLoading && (
          <div className="py-5">
            <Shimmer />
          </div>
        )}
        <Collection restaurant={restaurant} />
        <TopRestaurant restaurant={restaurant} />
        <RestaurantContainer restaurant={restaurant} />
        <BestPlaceContainer restaurant={restaurant} />
        <BestCuisinesContainer restaurant={restaurant} />
        <BestRestaurantContainer restaurant={restaurant} />
      </div>
    </Fragment>
  );
};

export default Body;
