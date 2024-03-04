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
    profileCompleted: localStorage.getItem("profileComleted") || null,
    payType: localStorage.getItem("payType") || null,
    paymentData: localStorage.getItem("paymentData") || null,
    coupanId: localStorage.getItem("coupanId") || null,
    varient_Id: null,
    urlType: null,
    subcateId: null,
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
    setProfileCompleted: (state, action) => {
      state.profileCompleted = action.payload;
      localStorage.setItem("profileComleted", action.payload);
    },
    setPayType: (state, action) => {
      state.payType = action.payload;
      localStorage.setItem("payType", action.payload);
    },
    setvarientId: (state, action) => {
      state.varient_Id = action.payload;
      // localStorage.setItem("varient_Id", action.payload);
    },
    setUrlType: (state, action) => {
      state.urlType = action.payload;
      // localStorage.setItem("payType", action.payload);
    },
    setSubCategoryIs: (state, action) => {
      state.subcateId = action.payload;
      // localStorage.setItem("payType", action.payload);
    },
    setCoupanIdlocal: (state, action) => {
      state.coupanId = action.payload;
      localStorage.setItem("coupanId", action.payload);
    },
    // setPaymentData: (state, action) => {
    //   state.paymentData = action.payload;
    //   localStorage.setItem("paymentData", JSON.stringify(action.payload));
    // },
    setPaymentData: (state, action) => {
      const paymentDataString = JSON.stringify(action.payload);
      state.paymentData = paymentDataString;
      localStorage.setItem("paymentData", paymentDataString);
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
  setProfileCompleted,
  setPayType,
  setPaymentData,
  setCoupanIdlocal,
  setUrlType,
  setSubCategoryIs,
  setvarientId,
} = localSlice.actions;
export default localSlice.reducer;
