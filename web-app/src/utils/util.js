import axios from "axios";
import {
  setIsLoading,
  updateCartCheckOut,
  updateCollectionDetail,
  updateRestaurant,
  updateRestaurantDetail,
} from "../redux/slice/restaurantSlice";
import {
  COLLECTION_DETAILS_URL,
  RESTAURANTDETAILS_URL,
  RESTAURANTS_URL,
} from "./constant";

/**
 * Restaurant API call
 * @param { dispatch} dispatch-default function dispatch the response to store
 */
export const RestaurantapiCall = async ({ dispatch }) => {
  try {
    dispatch(setIsLoading(true));
    const res = await axios.get(RESTAURANTS_URL);
    dispatch(setIsLoading(false));
    const updatePayload = {
      collectionCard:
        res?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
          ?.info,
      collectionHeader: res?.data?.data?.cards[0]?.card?.card?.header,
      topRestaurantCard:
        res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      topRestaurantHeader: res?.data?.data?.cards[1]?.card?.card?.header,
      restaurantInfoCard:
        res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      restaurantInfoHeader: res?.data?.data?.cards[2]?.card?.card,
    };
    dispatch(updateRestaurant(updatePayload));
  } catch {
    console.log("API is not Callling...!");
  }
};

/**
 * RestauranDetail API call
 * @param {resId} id to pass to the rest details from restCard
 * @param { dispatch} dispatch-default function dispatch the response to store
 */
export const RestaurantDetailapiCall = async ({
  resId,
  dispatch,
  setrestaurantDeatilAPIResponse,
}) => {
  try {
    dispatch(setIsLoading(true));
    const res = await axios.get(RESTAURANTDETAILS_URL(resId));
    // console.log("res=", res);
    dispatch(setIsLoading(false));
    const payload = {
      restaurantDetailHeader: res?.data?.data?.cards[0]?.card?.card?.text,
      restaurantInfo: res?.data?.data.cards?.[2]?.card?.card?.info,
      offersList:
        res?.data?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
          ?.offers,
      recomendedList:
        res?.data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[1]?.card?.card,
      toppickscard:
        res?.data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[1]?.card?.card.carousel,
      resAccordian:
        res?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR,
    };
    dispatch(updateRestaurantDetail(payload));
    setrestaurantDeatilAPIResponse(payload);
  } catch {
    console.log("API is not Callling...!");
  }
};

/**
 * CollectionDetail API call
 * @param {id} id to pass to the rest details from restCard
 * @param { dispatch} dispatch-default function dispatch the response to store
 */
export const CollectionDetailapiCall = async ({ dispatch }) => {
  try {
    dispatch(setIsLoading(true));
    const res = await axios.get(COLLECTION_DETAILS_URL);
    dispatch(setIsLoading(false));
    dispatch(updateCollectionDetail(res?.data));
  } catch {
    console.log("API is not Callling...!");
  }
};

export const cartCheckoutDetail = async ({ dispatch }) => {
  try {
    const res = await axios.get("https://www.swiggy.com/dapi/cart");
    console.log("res==", res);
    dispatch(updateCartCheckOut(res));
  } catch {
    console.log("API is not Callling...!");
  }
};
