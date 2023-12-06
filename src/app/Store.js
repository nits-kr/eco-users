import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { PostApi } from "../services/Post";
import cartReducer from "./slice/CartSlice";
import cartsReducer from "./slice/CartsSlice";
import CartSlice from "./slice/CartSlice";
export const store = configureStore({
  reducer: {
    [PostApi.reducerPath]: PostApi.reducer,
    cart: cartReducer,
    carts: cartsReducer,
    // cart: CartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostApi.middleware),
});
setupListeners(store.dispatch);

console.log(PostApi);
console.log(cartReducer);
