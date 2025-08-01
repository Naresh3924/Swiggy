/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import Collection from "../components/collection/Collection";
import TopRestaurant from "../components/topRestaurant/TopRestaurant";
import RestaurantContainer from "../components/restaurant/RestaurantContainer";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantapiCall } from "../utils/util";
import Shimmer from "../components/shimmer";

const Body = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store?.isLoading?.isLoading);
  const restaurant = useSelector((store) => store?.restaurant?.restaurant[0]);

  useEffect(() => {
    RestaurantapiCall({ dispatch });
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
      </div>
    </Fragment>
  );
};

export default Body;
