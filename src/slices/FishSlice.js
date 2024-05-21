import {createSlice} from "@reduxjs/toolkit";
import {api} from "../api/index.js";


const fishSlice = createSlice({
    name:"fishes",
    initialState: {
        data:[],
        results:[]
    },
    reducers:{
        search: (state, {payload})=>{
            const result = state.data.filter(i=>i.name.toLowerCase().includes(payload.toLowerCase()))
            return{
                ...state,
                results:result.length>0?result:state.data
            }
        }
    },

    extraReducers: (builder)=>{
        builder.addMatcher(api.endpoints.getFishes.matchFulfilled, (state, {payload})=>{
            return {
                ...state,
                data: payload,
                results: payload
            }
        })
    }
})

export default fishSlice.reducer;
export const {search} = fishSlice.actions;