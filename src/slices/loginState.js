import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:false
}

const loginState=createSlice({
    name:'login',
    initialState,
    reducers :{
        success:(state)=>{
            state.user=true
        },
        fail:(state)=>{
            state.user=false
        }
    },
})


export const { success, fail } = loginState.actions;
export default loginState.reducer;