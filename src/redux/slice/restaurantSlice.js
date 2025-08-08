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

const CollectionDetailSlice = createSlice({
  name: "CollectionDetail",
  initialState: {
    CollectionDetail: [],
  },
  reducers: {
    updateCollectionDetail: (state, action) => {
      state.CollectionDetail.push(action.payload);
    },
  },
});

export const { updateCollectionDetail } = CollectionDetailSlice.actions;

export const CollectionDetailReducer = CollectionDetailSlice.reducer;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    istoggleCartDetails: false,
    cartCheckOut: [],
    value: [],
    cartpopdetail: false,
  },
  reducers: {
    updateCartItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.items.pop(action);
    },
    updateToggleCart: (state, action) => {
      state.istoggleCartDetails = action.payload;
    },
    updateCartCheckOut: (state, action) => {
      state.cartCheckOut.push(action.payload);
    },
    Increment: (state) => {
      state.value.pop();
    },
    Decrement: (state) => {
      state.value.length = 0;
    },
  },
});
export const {
  updateCartItem,
  removeCartItem,
  clearCartItem,
  updateToggleCart,
  updateCartCheckOut,
  cartPopUpDetail,
  Increment,
  Decrement,
} = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
