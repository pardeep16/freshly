import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './feature/cart';

export const store = configureStore({
    reducer:{
        cartState:cartReducer
    }
})