import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {APIREQUESTS} from "../Api/ApiRequests";

export const fetchToken=createAsyncThunk('token/get', async (thunkAPI)=>{
    let res= await APIREQUESTS.getToken()
    // @ts-ignore
    return res
})


 const getTokenSlice=createSlice({
    name:'token',
    initialState:'',
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchToken.fulfilled,(state, action) => {
            return action.payload
        })
    }
})

export const tokenSlice=getTokenSlice.reducer