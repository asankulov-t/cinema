import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type initStateType={
    title:string,
}
let initState:initStateType={
    title:'Афиша',
}
const titleReducers=createSlice({
    name:'title',
    initialState:initState,
    reducers:{
        setTitle(state,action:PayloadAction<string>){
            state.title=action.payload
        }
    }
})
export const titleReducer=titleReducers.reducer
export const {setTitle}=titleReducers.actions