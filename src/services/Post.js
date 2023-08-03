// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const PostApi = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-65-2-108-172.ap-south-1.compute.amazonaws.com:5000/",
    headers: {
      "x-auth-token-user": localStorage.getItem("token"),
    },
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: (name) => ({
        url: `user/blog/blog/blog-list`,
        method: "post",
      }),
    }),
    getTrendingProduct: builder.query({
      query: (name) => ({
        url: `user/product/product/tranding-product`,
        method: "post",
      }),
    }),
    getRelatedProduct: builder.query({
      query: (name) => ({
        url: `user/product/product/releted-product/647eb680062001009e254fca`,
        method: "post",
      }),
    }),
    getProductList: builder.query({
      query: (name) => ({
        url: `user/product/product/list`,
        method: "post",
      }),
    }),
    getProductListDetails: builder.query({
      query: (id) => ({
        url: `user/product/product/details/${id}`,
        method: "post",
      }),
    }),
    getOrderList: builder.query({
      query: (name) => ({
        url: `user/order/order/order-list`,
        method: "post",
      }),
    }),
    getCardList: builder.query({
      query: (name) => ({
        url: `user/carts/carts/saveCarts-list`,
        method: "post",
      }),
    }),
    getAddressList: builder.query({
      query: (name) => ({
        url: `user/address/address/address-list`,
        method: "post",
      }),
    }),
    getCompareList: builder.query({
      query: (body) => ({
        url: `user/compare/compare/compare-list`,
        method: "post",
      }),
    }),
    createAddress: builder.mutation({
      query: (body) => ({
        url: `user/address/address/create-address`,
        method: "post",
        body,
      }),
    }),
    createCard: builder.mutation({
      query: (body) => ({
        url: `user/carts/carts/create-carts`,
        method: "post",
        body,
      }),
    }),
    createOrder: builder.mutation({
      query: (body) => ({
        url: `user/order/order/create-order`,
        method: "post",
        body,
      }),
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: `user/carts/carts/add-cart`,
        method: "post",
        body,
      }),
    }),
    deleteAddress: builder.mutation({
      query: (id) => ({
        url: `user/address/address/delete-address/${id}`,
        method: "DELETE",
      }),
    }),
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `user/carts/carts/saveCarts-delete/${id}`,
        method: "DELETE",
      }),
    }),
    deleteCompare: builder.mutation({
      query: (id) => ({
        url: `user/compare/compare/compare-delete/${id}`,
        method: "post",
      }),
    }),
    updateAddress: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id, ...data } = body;
        console.log("update address body data", data);
        return {
          url: `user/address/address/update-address/${id}`,
          method: "post",
          body: data,
        };
      },
    }),
    updateCard: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id, ...data } = body;
        console.log("update address body data", data);
        return {
          url: `user/carts/carts/saveCarts-update/${id}`,
          method: "post",
          body: data,
        };
      },
    }),
    userLogin: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: `user/user/user/login`,
          method: "post",
          body,
        };
      },
    }),
    sendEmail: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: `user/user/user/send-mail`,
          method: "post",
          body,
        };
      },
    }),
    varifyOtp: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: `user/user/user/verify-otp`,
          method: "post",
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPostQuery,
  useGetTrendingProductQuery,
  useGetRelatedProductQuery,
  useGetOrderListQuery,
  useGetProductListQuery,
  useGetProductListDetailsQuery,
  useCreateAddressMutation,
  useGetAddressListQuery,
  useDeleteAddressMutation,
  useUpdateAddressMutation,
  useGetCardListQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
  useUpdateCardMutation,
  useCreateOrderMutation,
  useGetCompareListQuery,
  useDeleteCompareMutation,
  useAddToCartMutation,
  useUserLoginMutation,
  useSendEmailMutation,
  useVarifyOtpMutation,
} = PostApi;