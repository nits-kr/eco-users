// localSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const localSlice = createSlice({
  name: "local",
  initialState: {
    ecomWebtoken: localStorage.getItem("ecomWebtoken") || null,
    ecomUserid: localStorage.getItem("ecomUserId") || null,
    fcmtoken: localStorage.getItem("patentaAdminFcmtoken") || null,
    optionAddIdea: localStorage.getItem("selectoptionforbusinessidea") || null,
  },
  reducers: {
    setEcomWebToken: (state, action) => {
      state.ecomWebtoken = action.payload;
      localStorage.setItem("ecomWebtoken", action.payload);
    },
    setEcomUserId: (state, action) => {
      state.ecomUserid = action.payload;
      localStorage.setItem("ecomUserId", action.payload);
    },
    setFcmToken: (state, action) => {
      state.fcmtoken = action.payload;
      localStorage.setItem("patentaAdminFcmtoken", action.payload);
    },
    setOptionchangeAtAddIdea: (state, action) => {
      state.optionAddIdea = action.payload;
      localStorage.setItem("selectoptionforbusinessidea", action.payload);
    },
  },
});

export const {
  setEcomWebToken,
  setFcmToken,
  setEcomUserId,
  setOptionchangeAtAddIdea,
} = localSlice.actions;
export default localSlice.reducer;
