import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        value: 0
    },
    reducers:{
        increase:(state, action) =>{
            state.value += 1
            
        },
    }
})

export const {increase} = CartSlice.actions
export default CartSlice.reducer