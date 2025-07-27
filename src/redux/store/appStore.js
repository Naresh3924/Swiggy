import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../slice/sidebarSlice";
import searchReducer from "../slice/searchSlice";
import userReducer from "../slice/userSlice";
import {
  restaurantReducer,
  restaurantDeatilReducer,
} from "../slice/restaurantSlice";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
    user: userReducer,
    restaurant: restaurantReducer,
    restaurantDetail: restaurantDeatilReducer,
  },
});

export default appStore;
