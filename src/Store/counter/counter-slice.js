import { createSlice } from "@reduxjs/toolkit";

export const counterSlice= createSlice({
    name : "counterSlice",
    initialState:{
        counter:0,
    },
    reducers:{
        increment :(currentSlice,action)=>{
            currentSlice.counter+=action.payload
        },
        decrement :(currentSlice,action)=>{
            currentSlice.counter-=action.payload
        },
    },
}
)
const {increment,decrement}=counterSlice.actions
export {increment,decrement}