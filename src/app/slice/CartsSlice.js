import { createSlice } from "@reduxjs/toolkit";
const CartsSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    getCart(state, action) {},
    addToCart(state, action) {},
    deleteCart(state, action) {},
    decreaseCart(state, action) {},
    increaseCart(state, action) {},
    clearAllCart(state, action) {},
  },
});

export default CartsSlice.reducer;
