import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import searchReducer from './searchSlice';
import userReducer from './userSlice';
import restaurantReducer from './restaurantSlice'

const appStore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
    user: userReducer,
    restaurant: restaurantReducer
  },
});

export default appStore;
