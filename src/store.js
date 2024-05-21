import {configureStore} from "@reduxjs/toolkit";
import {api} from "./api/";
import fishSlice from "./slices/FishSlice.js";
import {star_wars_api} from "./api/star_wars.js";

const store =configureStore({
    reducer:{
        [api.reducerPath]: api.reducer,
        [star_wars_api.reducerPath]: star_wars_api.reducer,
        fish: fishSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(api.middleware, star_wars_api.middleware)

})

export default store;