import React, { useEffect, useState } from "react";
import RestaurantDetail from "./RestaurantDetail";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RestaurantDetailapiCall } from "../../utils/util";
import { updateFooter, updateHeader } from "../../redux/slice/restaurantSlice";
import UpdatedFooter from "../footer/UpdatedFooter";

const RestaurantContainer = () => {
  const [restaurantDeatilAPIResponse, setrestaurantDeatilAPIResponse] =
    useState([]); //temprory fix for updating restaurantDetails page
  const { resId } = useParams();
  const dispatch = useDispatch();

  // const RestaurantDetailInfo = useSelector(
  //   (store) => store?.restaurantDetail?.restaurantDetail[0]   //created local state for update RestaurantDetails//
  // );

  useEffect(() => {
    if (resId) {
      RestaurantDetailapiCall({
        resId,
        dispatch,
        setrestaurantDeatilAPIResponse,
      });
    }
    dispatch(updateHeader(true));
    dispatch(updateFooter(true));
  }, [resId]);

  return (
    <div>
      <RestaurantDetail RestaurantDetailInfo={restaurantDeatilAPIResponse} />
      <UpdatedFooter footerinfo={restaurantDeatilAPIResponse} />
    </div>
  );
};

export default RestaurantContainer;
