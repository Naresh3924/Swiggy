import {
  setIsLoading,
  updateRestaurant,
  updateRestaurantDetail,
} from "../redux/slice/restaurantSlice";
import { RESTAURANTDETAILS_URL, RESTAURANTS_URL } from "./constant";

/**
 * Restaurant API call
 * @param { dispatch} dispatch-default function dispatch the response to store
 */
export const RestaurantapiCall = async ({ dispatch }) => {
  dispatch(setIsLoading(true));
  const data = await fetch(RESTAURANTS_URL);
  const json = await data.json();
  dispatch(setIsLoading(false));
  const updatePayload = {
    collectionCard:
      json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info,
    collectionHeader: json.data?.cards[0]?.card?.card?.header,
    topRestaurantCard:
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    topRestaurantHeader: json.data?.cards[1]?.card?.card?.header,
    restaurantInfoCard:
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    restaurantInfoHeader: json.data?.cards[2]?.card?.card,
  };
  dispatch(updateRestaurant(updatePayload));
};

/**
 * RestauranDetail API call
 * @param {resId} id to pass to the rest details from restCard
 * @param { dispatch} dispatch-default function dispatch the response to store
 */
export const RestaurantDetailapiCall = async ({ resId, dispatch }) => {
  dispatch(setIsLoading(true));
  const data = await fetch(RESTAURANTDETAILS_URL(resId));
  const json = await data.json();
  dispatch(setIsLoading(false));
  const payload = {
    restaurantDetailHeader: json.data?.cards[0]?.card?.card?.text,
    restaurantInfo: json.data.cards?.[2]?.card?.card?.info,
    offersList:
      json.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers,
    recomendedList:
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card,
  };
  dispatch(updateRestaurantDetail(payload));
};
