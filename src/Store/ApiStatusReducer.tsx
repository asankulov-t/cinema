import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type initStateType={
    status:'Loading'|'Failed'|'Success',
    message:string
}
let initState:initStateType={
    status:'Failed',
    message:''
}
const apiStatusReducer=createSlice({
    name:'loader',
    initialState:initState,
    reducers:{
        setStatusApi(state,action:PayloadAction<{status:'Loading'|'Failed'|'Success',message:string}>){
            state.status=action.payload.status
            state.message=action.payload.message
        }
    }
})

export const statusReducer=apiStatusReducer.reducer
export const {setStatusApi}=apiStatusReducer.actions