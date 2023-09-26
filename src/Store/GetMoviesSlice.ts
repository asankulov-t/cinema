import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {APIREQUESTS} from "../Api/ApiRequests";

export const fetchData=createAsyncThunk('movies/get',async (token:string, thunkAPI) =>{
    let result=await APIREQUESTS.getContent(token)
    return result
} )

export const getMoviesSlice=createSlice({
    name:'movies',
    initialState:[],
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state, action) => {
            state.push(action.payload)
        })
    }
})
export const moviesSlice=getMoviesSlice.reducer