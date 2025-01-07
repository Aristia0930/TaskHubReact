import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:false,
    role:""
}

const loginState=createSlice({
    name:'login',
    initialState,
    reducers :{
        success:(state)=>{
            state.user=true
            state.role="user"
        },
        fail:(state)=>{
            state.user=false
        },
        adminsuccess:(state)=>{
            state.user=true
            state.role="admin"
        },

    },
})


export const { success, fail,adminsuccess } = loginState.actions;
export default loginState.reducer;