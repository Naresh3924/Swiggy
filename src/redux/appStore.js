import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import searchReducer from './searchSlice';
import userReducer from './userSlice';

const appStore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search:searchReducer,
    user:userReducer
  },
});

export default appStore;
