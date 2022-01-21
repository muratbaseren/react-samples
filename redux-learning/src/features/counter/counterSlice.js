import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value++;
        },
        decrement: state => {
            state.value--;
        },
        incrementByAmount: (state, action) => {
            console.log(action);
            state.value += action.payload.value;
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = state => state.counter.value

export const incrementByAmountAsync = payload => dispatch => {
    // console.log(payload);
    setTimeout(() => {
        dispatch(incrementByAmount(payload));
    }, 2000);
}

export default counterSlice.reducer;