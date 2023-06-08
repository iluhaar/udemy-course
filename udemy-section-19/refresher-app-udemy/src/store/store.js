import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import uiSlice from "./reducers/uiSlice";

const store = configureStore({ reducer: { cart: cartSlice.reducer, uiState: uiSlice.reducer } });

export default store;
