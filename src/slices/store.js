import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginState"


const store = configureStore({
    reducer:{
        loginState:loginReducer,


    }
})

export default store;