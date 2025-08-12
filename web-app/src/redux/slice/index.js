import { combineReducers } from "@reduxjs/toolkit";
import { restaurantDeatilReducer, restaurantReducer } from "./restaurantSlice";

const rootReducer = combineReducers({
  restauranSlice: restaurantReducer,
  restaurantDetails: restaurantDeatilReducer,
});

export default rootReducer;
