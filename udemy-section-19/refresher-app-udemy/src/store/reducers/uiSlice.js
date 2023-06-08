import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowCart: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "uiReducer",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      state.isShowCart = action.payload;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggleCart, showNotification } = uiSlice.actions;

export default uiSlice;
