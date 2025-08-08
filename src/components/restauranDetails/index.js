import React, { useEffect } from "react";
import RestaurantDetail from "./RestaurantDetail";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RestaurantDetailapiCall } from "../../utils/util";

const RestaurantContainer = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();

  const RestaurantDetailInfo = useSelector(
    (store) => store?.restaurantDetail?.restaurantDetail[0]
  );

  useEffect(() => {
    if (resId) {
      RestaurantDetailapiCall({ resId, dispatch });
    }
  }, [resId]);

  return (
    <div>
      <RestaurantDetail RestaurantDetailInfo={RestaurantDetailInfo} />
    </div>
  );
};

export default RestaurantContainer;
