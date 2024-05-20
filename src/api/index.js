import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://fish-species.p.rapidapi.com/fish_api/",
        prepareHeaders: (headers)=>{
            headers.set("X-RapidAPI-Key", 'd06289e0demsh525f8da6d4fe6bbp180afajsn7b8d172e50ff')
            headers.set("X-RapidAPI-Host", 'fish-species.p.rapidapi.com')
            return headers;
        }
    }),
    endpoints:(builder)=> ({
        getFishes: builder.query({
            query: ()=> 'fishes',
        })
    })
})

export const {useGetFishesQuery} = api;