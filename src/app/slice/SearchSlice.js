import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",

  initialState: {
    query: localStorage?.getItem("searchQuerymain") || "",
    results: [],
    stars: [],
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
      console.log("star action.payload", action.payload);
    },
  },
});

export const { searchQuerydata, setSearchResults, setUserStarRatings } =
  SearchSlice.actions;
export default SearchSlice.reducer;
