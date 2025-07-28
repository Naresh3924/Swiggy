import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../slice/sidebarSlice";
import searchReducer from "../slice/searchSlice";
import userReducer from "../slice/userSlice";
import {
  restaurantReducer,
  restaurantDeatilReducer,
  loadingReducer,
} from "../slice/restaurantSlice";

const appStore = configureStore({
  reducer: {
    isLoading: loadingReducer,
    sidebar: sidebarReducer,
    search: searchReducer,
    user: userReducer,
    restaurant: restaurantReducer,
    restaurantDetail: restaurantDeatilReducer,
  },
});

export default appStore;
