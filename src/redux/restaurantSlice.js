import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: 'Restaurant',
    initialState: {
        data: []
    },
    reducers: {
        updateRestaurant: (state, action) => {
            state.data.push(...state.data, action.payload)
        }
    }
})
export const { updateRestaurant } = restaurantSlice.actions
export default restaurantSlice.reducer;
