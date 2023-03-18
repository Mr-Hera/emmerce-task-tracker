import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskCoreApi = createApi({ 
    reducerPath: "taskCoreApi",
    baseQuery: fetchBaseQuery({     
        baseUrl: "https://emmerce-task-tracker-api-production.up.railway.app/",
        prepareHeaders: (headers) => {
            headers.set( "Content-Type", "application/json" );
            return headers;
        },
    }),
    endpoints: ( builder ) => ({ 
        // all endpoints go here
        getRegistered: builder.query({ query: (username, email, password) => "/register" }),
        getLoggedIn: builder.query({ query: (username, password) => "/login" }),
        getLoggedOut: builder.query({ query: (user_id) => "/logout" }),
        getTasks: builder.query({ query: () => "/tasks" }),
        getTaskDetails: builder.query({ query: ( task_id ) => `/tasks/${task_id}` }),
    }),
});

export const { 
    useGetRegisteredQuery,
    useGetLoggedInQuery,
    useGetLoggedOutQuery,
    useGetTasksQuery,
    useGetTaskDetailsQuery,
} = taskCoreApi;