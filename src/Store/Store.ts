import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {getMoviesSlice, moviesSlice} from "./GetMoviesSlice";
import {tokenSlice} from "./GetTokenSlice";
import {statusReducer} from "./ApiStatusReducer";
import {titleReducer} from "./TitleReducer";

const rootReducer=combineReducers({
    movies:moviesSlice,
    token:tokenSlice,
    status:statusReducer,
    titleReducers:titleReducer
})
export const store=configureStore({
    reducer:{
        rootReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
