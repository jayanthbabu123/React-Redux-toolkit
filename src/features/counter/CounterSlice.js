import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            return { value: state.value + 1 };
        },
        decrement: (state) => {
            return { value: state.value - 1 };
        }
    }
})
console.log(counterSlice)
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;