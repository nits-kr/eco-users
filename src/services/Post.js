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
    getCategoryList: builder.query({
      query: (name) => ({
        url: "/user/category/category/category-list",
        method: "post",
      }),
    }),
    subCategoryList: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id } = body;
        console.log("update address body data", id);
        return {
          url: `/user/category/category/category-subCategory/${id}`,
          method: "post",
          // body: data,
        };
      },
    }),
    AddToWislistList: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id } = body;
        console.log("update address body data", id);
        return {
          url: `user/wish/wish/add-wish?product_Id=${id}`,
          method: "post",
          // body: data,
        };
      },
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
    getCartList: builder.query({
      query: (name) => ({
        url: "/user/carts/carts/carts-list",
        method: "post",
      }),
    }),
    getAddressList: builder.query({
      query: (name) => ({
        url: "/user/address/address/address-list",
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
        url: "/user/order/order/create-order",
        method: "post",
        body,
      }),
    }),
    showProductRating: builder.mutation({
      query: (body) => ({
        url: "/user/product/product/product-rating",
        method: "post",
        body,
      }),
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: "user/carts/carts/add-cart",
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
    cancelOrder: builder.mutation({
      query: (id) => ({
        url: `/user/order/order/user-cancelled-order/${id}`,
        method: "post",
      }),
    }),
    subSubProduct: builder.mutation({
      query: (id) => ({
        url: `/user/category/category/subCategory-product/${id}`,
        method: "post",
      }),
    }),
    orderDetails: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id } = body;
        console.log("update address body data", id);
        return {
          url: `/user/order/order/order-Details/${id}`,
          method: "post",
          // body: data,
        };
      },
    }),
    relatedProductDetails: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id } = body;
        console.log("update address body data", id);
        return {
          url: `/user/product/product/releted-product/${id}`,
          method: "post",
          // body: data,
        };
      },
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
    createReport: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: "/user/reports",
          method: "post",
          body,
        };
      },
    }),
    createContact: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: "/user/contact/contact/create-contact",
          method: "post",
          body,
        };
      },
    }),
    addReview: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: "/user/product/product/product-rating",
          method: "post",
          body,
        };
      },
    }),
    userSignUp: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: "/user/user/user/signup",
          method: "post",
          body,
        };
      },
    }),
    filterPrice: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: "/user/product/product/price",
          method: "post",
          body,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: "/user/user/user/change-password",
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
  useUserSignUpMutation,
  useResetPasswordMutation,
  useGetCategoryListQuery,
  useSubCategoryListMutation,
  useShowProductRatingMutation,
  useSubSubProductMutation,
  useFilterPriceMutation,
  useCancelOrderMutation,
  useOrderDetailsMutation,
  useCreateReportMutation,
  useGetCartListQuery,
  useAddToWislistListMutation,
  useCreateContactMutation,
  useAddReviewMutation,
  useRelatedProductDetailsMutation,
} = PostApi;
