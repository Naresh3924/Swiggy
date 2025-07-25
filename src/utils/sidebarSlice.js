import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebar: false,
  },
  reducers: {
    togglesidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});

export const { togglesidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
