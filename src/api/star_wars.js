import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const star_wars_api = createApi({
    reducerPath: "star_wars",
    baseQuery: fetchBaseQuery({baseUrl:"https://swapi.py4e.com/api/"}),
    endpoints: (build)=>({
        getPlanets: build.query({
            query: ()=>'planets/'
        }),
        getPlanetsByPage: build.query({
            query: (pg)=>'planets/?page='+pg
        }),
        getPlanetById: build.query({
            query: (id)=>`planets/${id}/`
        })
    })
})

export const {useGetPlanetsQuery, useGetPlanetsByPageQuery, useGetPlanetByIdQuery}= star_wars_api;

