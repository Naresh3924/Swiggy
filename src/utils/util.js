import { updateRestaurant } from "../redux/restaurantSlice";
import { RESTAURANTS_URL } from "./constant";
/**
 * initial restaurant API Call
 */
export const RestaurantapiCall = async ({ useState, dispatch }) => {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();
    // const itemcollection = json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    // const TopResItems = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // const Restuarntcardinfo = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const updatePayload = {
        collectionCard: json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info,
        collectionHeader: json.data?.cards[0]?.card?.card?.header,
        topRestaurantCard: json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        topRestaurantHeader: json.data?.cards[1]?.card?.card?.header,
        restaurantInfoCard: json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        restaurantInfoHeader: json.data?.cards[2]?.card?.card
    }
    dispatch(updateRestaurant(updatePayload))
  
}