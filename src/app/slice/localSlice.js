// localSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const localSlice = createSlice({
  name: "local",
  initialState: {
    ecomWebtoken: localStorage.getItem("ecomWebtoken") || null,
    ecomUserid: localStorage.getItem("ecomUserId") || null,
    fcmtoken: localStorage.getItem("patentaAdminFcmtoken") || null,
    optionAddIdea: localStorage.getItem("selectoptionforbusinessidea") || null,
    updateRating: localStorage.getItem("userRating") || null,
    varificationEmail: localStorage.getItem("varificationEmail") || null,
    varificationOtp: localStorage.getItem("varificationOtp") || null,
    varificationMobile: localStorage.getItem("varificationMobile") || null,
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
    setUpdateRating: (state, action) => {
      state.updateRating = action.payload;
      localStorage.setItem("userRating", action.payload);
      console.log("userRating", action.payload);
    },
    setFcmToken: (state, action) => {
      state.fcmtoken = action.payload;
      localStorage.setItem("patentaAdminFcmtoken", action.payload);
    },
    setOptionchangeAtAddIdea: (state, action) => {
      state.optionAddIdea = action.payload;
      localStorage.setItem("selectoptionforbusinessidea", action.payload);
    },
    setVarificationEmail: (state, action) => {
      state.varificationEmail = action.payload;
      localStorage.setItem("varificationEmail", action.payload);
    },
    setVarificationOtp: (state, action) => {
      state.varificationOtp = action.payload;
      localStorage.setItem("varificationOtp", action.payload);
    },
    setVarificationMobile: (state, action) => {
      state.varificationMobile = action.payload;
      localStorage.setItem("varificationMobile", action.payload);
    },
  },
});

export const {
  setEcomWebToken,
  setFcmToken,
  setEcomUserId,
  setOptionchangeAtAddIdea,
  setUpdateRating,
  setVarificationEmail,
  setVarificationOtp,
  setVarificationMobile,
} = localSlice.actions;
export default localSlice.reducer;
