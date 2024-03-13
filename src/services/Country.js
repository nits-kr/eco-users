import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CountryApi = createApi({
  reducerPath: "CountryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://countriesnow.space/api/v0.1/",
  }),
  endpoints: (builder) => ({
    getStates: builder.query({
      query: () => "countries/states",
    }),
  }),
});

export const { useGetStatesQuery } = CountryApi;
