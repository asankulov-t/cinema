import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {APIREQUESTS} from "../Api/ApiRequests";

let today = new Date().toLocaleDateString('ro-Ro')

export const fetchData=createAsyncThunk('movies/get',async (token:string, thunkAPI) =>{
    let result=await APIREQUESTS.getMovies(token,today)
    return result
} )

export const getMoviesSlice=createSlice({
    name:'movies',
    initialState:[],
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state, action) => {
            return state=action.payload
        })
    }
})
export const moviesSlice=getMoviesSlice.reducer