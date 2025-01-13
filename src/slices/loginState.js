import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:false,
    role:"",
    image:0
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
        imagechagne:(state,action)=>{
            state.image = action.payload;
        }

    },
})


export const { success, fail,adminsuccess,imagechagne } = loginState.actions;
export default loginState.reducer;