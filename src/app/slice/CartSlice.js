import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.count = state.items.length;
    },
    removeCartItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
        state.count = state.items.length;
      }
    },
    removeCartItemAll: (state) => {
      state.items = [];
      state.count = 0;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  removeCartItemAll,
  increment,
  decrement,
  incrementByAmount,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.count;

export default cartSlice.reducer;




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // export const incrementAsync = createAsyncThunk(
// //   "counter/fetchCount",
// //   async (amount) => {
// //     const response = await fetchCount(amount);
// //     return response.data;
// //   }
// // );

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       state?.push(action?.payload)
//     },
//     removeCartItem: (state, action) => {},
//     removeCartItemAll: (state, action) => {},
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//     // extraReducers: (builder) => {
//     //   builder
//     //     .addCase(incrementAsync.pending, (state) => {
//     //       state.status = "loading";
//     //     })
//     //     .addCase(incrementAsync.fulfilled, (state, action) => {
//     //       state.status = "idle";
//     //       state.value += action.payload;
//     //     });
//     // },
//   },
// });

// export const {
//   addToCart,
//   removeCartItem,
//   removeCartItemAll,
//   increment,
//   decrement,
//   incrementByAmount,
// } = cartSlice.actions;

// export const selectCount = (state) => state.cart.value;

// export default cartSlice.reducer;
// // console.log(cartSlice.actions);
// // console.log(cartSlice.reducer.actions);
