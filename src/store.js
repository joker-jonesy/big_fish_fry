import {configureStore} from "@reduxjs/toolkit";
import {api} from "./api/";
import fishSlice from "./slices/FishSlice.js";

const store =configureStore({
    reducer:{
        [api.reducerPath]: api.reducer,
        fish: fishSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(api.middleware)
})

export default store;