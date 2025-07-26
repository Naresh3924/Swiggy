import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    signinSidebar: false,
  },
  reducers: {
    togglesigninbar: (state) => {
      state.signinSidebar = !state.signinSidebar;
    },
  },
});

export const { togglesigninbar } = userSlice.actions;
export default userSlice.reducer;
