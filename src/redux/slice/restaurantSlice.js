import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "Restaurant",
  initialState: {
    restaurant: [],
  },
  reducers: {
    updateRestaurant: (state, action) => {
      state.restaurant.push(action.payload);
    },
  },
});
export const { updateRestaurant } = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;

const restaurantDetailSlice = createSlice({
  name: "RestaurantDetail",
  initialState: {
    restaurantDetail: [],
  },
  reducers: {
    updateRestaurantDetail: (state, action) => {
      state.restaurantDetail.push(action.payload);
    },
  },
});

export const { updateRestaurantDetail } = restaurantDetailSlice.actions;
export const restaurantDeatilReducer = restaurantDetailSlice.reducer;
