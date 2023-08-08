import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem(
        "credentials",
        JSON.stringify({
          user: user,
          token: token,
        })
      );
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
  },
});


export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
