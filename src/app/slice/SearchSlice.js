import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",

  initialState: {
    query: localStorage?.getItem("searchQuerymain") || "",
    results: [],
    stars: [],
    compare: localStorage?.getItem("comparelist") || "",
  },
  reducers: {
    searchQuerydata: (state, action) => {
      state.query = action.payload;
      localStorage.setItem("searchQuerymain", action.payload);
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
    setUserStarRatings: (state, action) => {
      state.stars = action.payload;
    },
    setCompareList: (state, action) => {
      state.compare = action.payload;
      localStorage?.setItem("comparelist", action.payload);
    },
  },
});

export const {
  searchQuerydata,
  setSearchResults,
  setUserStarRatings,
  setCompareList,
} = SearchSlice.actions;
export default SearchSlice.reducer;
