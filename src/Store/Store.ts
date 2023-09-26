import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {getMoviesSlice, moviesSlice} from "./GetMoviesSlice";
import {tokenSlice} from "./GetTokenSlice";

const rootReducer=combineReducers({
    movies:moviesSlice,
    token:tokenSlice
})
export const store=configureStore({
    reducer:{
        rootReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
