import { createSlice } from "@reduxjs/toolkit";

const intialStore = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: intialStore,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    increaseBy: (state, action) => {
      state.counter += action.payload;
    },
    ShowCounter: (state, action) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { decrement, increment, increaseBy, ShowCounter } = counterSlice.actions;

export default counterSlice;
