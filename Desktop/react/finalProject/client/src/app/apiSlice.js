//import{createApi,fechBaseQuery} from "@reduxjs/toolkit/query/react"
import { createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const apiSlice=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://localhost:33"
    })
    ,endpoints:()=>({})
})
export default apiSlice