import apiSlice from "../../app/apiSlice";

const seminariesApiSlice=apiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllSeminaries:build.query({
            query:()=>({
                url:"/api/seminaries"
            }),
            providesTags:["Seminaries"]
        }),
        addSeminary:build.mutation({
            query:(seminary)=>({
                url:"/api/seminaries",
                method:"POST",
                 body:seminary
            }),
            
            invalidatesTags:["Seminaries"]

        }),
        updateSeminary:build.mutation({
            query:(seminary)=>({
                url:"/api/seminaries",
                method:"PUT",
                 body:seminary
            }),
            
            invalidatesTags:["Seminaries"]

        })
    })
})
export const { useGetAllSeminariesQuery,useAddSeminaryMutation,useUpdateSeminaryMutation } = seminariesApiSlice


