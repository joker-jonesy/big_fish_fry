import {createSlice} from "@reduxjs/toolkit";
import {api} from "../api/index.js";


const fishSlice = createSlice({
    name:"fishes",
    initialState: [],
    reducer:{

    },
    extraReducers: (builder)=>{
        builder.addMatcher(api.endpoints.getFishes.matchFulfilled, (state, {payload})=>{
            return payload
        })
    }
})

export default fishSlice.reducer;