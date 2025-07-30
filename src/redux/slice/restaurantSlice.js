import { createSlice, current } from "@reduxjs/toolkit";

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

// const CartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     updateCart: (state, action) => {
//       state.cart.push(action.payload);
//     },
//   },
// });

// export const { updateCart } = CartSlice.actions;

// export const CartReducer = CartSlice.reducer;
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    updateCartItem: (state, action) => {
      
      state.items.push(action.payload);
    },
    
  },
});
export const { updateCartItem, removeCartItem, clearCartItem } = cartSlice.actions;
export const CartReducer= cartSlice.reducer;
