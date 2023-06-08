import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  isChanged: false,
};

const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      const newItem = action.payload;
      const isItemExist = state.items.find((item) => item.id === newItem.id);
      if (!isItemExist) {
        state.totalQuantity++;

        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        isItemExist.quantity++;
        isItemExist.totalPrice = isItemExist.totalPrice + newItem.price;
      }
      state.isChanged = true;
    },
    increaseQuantity: (state, action) => {
      state = state.items.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
          item.totalPrice = item.totalPrice + item.price;
        }
        state.isChanged = true;

        return item;
      });
    },
    decreaseQuantity: (state, action) => {
      state = state.items.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
          item.totalPrice = item.totalPrice - item.price;
        }
        state.isChanged = true;

        return item;
      });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalQuantity--;
      state.isChanged = true;
    },
    updateCart: (state, action) => {
      if (action.payload !== null) {
        state.items = action.payload.items;
        state.totalQuantity = action.payload.totalQuantity;
      }
    },
  },
});

export const { addNewItem, increaseQuantity, decreaseQuantity, removeItem, updateCart } = cartSlice.actions;

export default cartSlice;
