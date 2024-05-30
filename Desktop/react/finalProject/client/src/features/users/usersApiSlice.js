import apiSlice from "../../app/apiSlice";

const usersApiSlice=apiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllUsers:build.query({
            query:()=>({
                url:"/api/users"
            })
        }),
        addUser:build.mutation({
            query:(user)=>({
                url:"/api/users",
                method:"POST",
                 body:user
            })
        })
    })
})
export const { useGetAllUsersQuery,useAddUserMutation } = usersApiSlice


