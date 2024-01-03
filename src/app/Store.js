import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { PostApi } from "../services/Post";
import cartReducer from "./slice/CartSlice";
import cartsReducer from "./slice/CartsSlice";
import CartSlice from "./slice/CartSlice";
import SearchSliceReducer from "./slice/SearchSlice";
export const store = configureStore({
  reducer: {
    [PostApi.reducerPath]: PostApi.reducer,
    cart: cartReducer,
    carts: cartsReducer,
    search: SearchSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostApi.middleware),
});
setupListeners(store.dispatch);
