import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 1, name: "Silver Cross Pendant Necklace", count: 1 },
    { id: 2, name: "The Blessed Mary Silver Necklace", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      state[action.payload].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});

export let { addCount, addItem } = cart.actions;
