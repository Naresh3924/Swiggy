import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        search:[]
    },reducers:{
        addSearchResult:(state,action)=>{
            state.search=action.payload;
        }
    }
})

export const{addSearchResult}=searchSlice.actions;
export default searchSlice.reducer;