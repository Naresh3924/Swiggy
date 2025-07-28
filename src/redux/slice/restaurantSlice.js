import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "Loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setIsLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;

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
