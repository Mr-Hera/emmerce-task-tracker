import { configureStore } from "@reduxjs/toolkit";
import { taskCoreApi } from "./services/taskCore";

export const store = configureStore ({
    reducer: {
        [ taskCoreApi.reducerPath ]: taskCoreApi.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( taskCoreApi.middleware ),
});