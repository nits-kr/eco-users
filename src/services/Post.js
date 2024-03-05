// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const userId = localStorage?.getItem("ecomUserId");

// Define a service using a base URL and expected endpoints
export const PostApi = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://euser.techgropsedev.com:2087/",
    // headers: {
    //   "x-auth-token-user": localStorage.getItem("ecomWebtoken"),
    // },
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: (name) => ({
        url: `user/blog/blog/blog-list`,
        method: "post",
      }),
    }),
    getPendingOrder: builder.query({
      query: (name) => ({
        url: "/user/dashboards/dashboards/pending-order",
        method: "post",
      }),
    }),
    getCategoryList: builder.query({
      query: (name) => ({
        url: "/user/category/category/category-list",
        method: "post",
      }),
    }),
    getSubCategoryList: builder.query({
      query: (name) => ({
        url: "admin/category/subCategory/SubCategoryList",
        method: "PATCH",
      }),
    }),
    getTopDiscountProduct: builder.query({
      query: ({ ecommercetoken }) => ({
        url: "user/product/product/high-Discount-list",
        method: "PATCH",
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),
    getRecommendedProduct: builder.query({
      query: ({ ecommercetoken }) => ({
        url: "user/product/product/recommendedProducts",
        method: "PATCH",
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),
    subCategoryList: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id } = body;
        console.log("update address body data", id);
        return {
          url: `user/subCategories/${id}`,
          method: "get",
          // body: data,
        };
      },
    }),
    TopBannerList: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id } = body;
        console.log("update address body data", id);
        return {
          url: `user/category/category/category-banner/${id}`,
          method: "post",
          // body: data,
        };
      },
    }),
    subCategoryProductList: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { id } = body;
        console.log("update address body data", id);
        return {
          url: `/user/category/category/subCategory-product/${id}`,
          method: "post",
          // body: data,
        };
      },
    }),
    AddToWislistList: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ecomUserId } = body;
        return {
          url: `user/wish/wish/add-wish/${ecomUserId}`,
          method: "get",
          // body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    getTrendingProduct: builder.query({
      query: ({ ecommercetoken }) => ({
        url: `user/product/product/trending-product`,
        method: "PATCH",
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),

    getProductList: builder.mutation({
      query: ({ ecommercetoken }) => {
        return {
          url: "user/product/product/list",
          method: "PATCH",
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    getBannerList: builder.query({
      query: (area) => ({
        url: `user/banner`,
        method: "PATCH",
        body: area,
      }),
    }),

    proceedToPay: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/carts/carts/proceedToBuy",
          method: "PATCH",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    blogCommentList: builder.query({
      query: (name) => ({
        url: "/user/blog/blog/comments-list",
        method: "post",
      }),
    }),

    getWishListDetails: builder.mutation({
      query: ({ ecomUserId, ecommercetoken }) => {
        return {
          url: "user/wish/wish/wish-List",
          method: "PUT",
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    getProductListDetails: builder.mutation({
      query: ({ id, ecommercetoken }) => {
        return {
          url: `user/product/product/details/${id}`,
          method: "post",
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    getOrderList: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/order/order/order-list",
          method: "PATCH",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    getCardList: builder.mutation({
      query: ({ ecomUserId, ecommercetoken }) => {
        return {
          url: `user/carts/carts/saveCarts-list/${ecomUserId}`,
          method: "post",
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    getCartListheader: builder.mutation({
      query: ({ ecomUserId, ecommercetoken }) => {
        return {
          url: `user/carts/carts/carts-list`,
          method: "get",
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    getCartListSummery: builder.mutation({
      query: ({ ecomUserId, ecommercetoken }) => {
        return {
          url: `user/carts/carts/carts-summery/${ecomUserId}`,
          method: "post",
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    getAddressList: builder.mutation({
      query: ({ ecomUserId, ecommercetoken }) => {
        return {
          url: `user/address/address/address-list`,
          method: "get",
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    getProfileDetails: builder.mutation({
      query: ({ ecomUserId, ecommercetoken }) => {
        return {
          url: `user/user/user/about-profile/${ecomUserId}`,
          method: "post",
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    getCompareList: builder.query({
      query: (body) => ({
        url: `user/compare/compare/compare-list`,
        method: "post",
      }),
    }),
    createAddress: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/address/address/create-address",
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    createBlogComment: builder.mutation({
      query: (body) => ({
        url: "/user/blog/blog/blog-comments",
        method: "post",
        body,
      }),
    }),

    createCard: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/carts/carts/create-carts",
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    addCompare: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/compare/compare/add-compare",
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    searchProductHeader: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/product/product/search-product",
          method: "PATCH",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    searchBlog: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/blog/blog/blog-search",
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    updateProfile: builder.mutation({
      query: ({ ecomUserId, formData, ecommercetoken }) => ({
        url: `user/user/user/edit-profile/${ecomUserId}`,
        method: "POST",
        body: formData,
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),
    updateProfilelogin: builder.mutation({
      query: ({ formdataall, ecommercetoken }) => ({
        url: "user/user/user/edit-profile",
        method: "put",
        body: formdataall,
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),

    createOrder: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/order/order/create-order",
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    showProductRating: builder.mutation({
      query: (body) => ({
        url: "user/product/product/product-rating",
        method: "post",
        body,
      }),
    }),

    updateProductRating: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/product/product/updateRating",
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    addToCart: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/carts/carts/add-cart",
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    deleteCartItems: builder.mutation({
      query: ({ ecommercetoken, id }) => ({
        url: `user/carts/carts/delete-product/${id}`,
        method: "DELETE",
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),
    deleteAddress: builder.mutation({
      query: ({ ecommercetoken, addressId }) => ({
        url: `user/address/address/delete-address/${addressId}`,
        method: "DELETE",
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),
    deleteCard: builder.mutation({
      query: ({ ecommercetoken, cardId }) => ({
        url: `user/carts/carts/saveCarts-delete/${cardId}`,
        method: "DELETE",
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),
    deleteWishList: builder.mutation({
      query: ({ ecommercetoken, wishId }) => ({
        url: `user/wish/wish/wish-delete/${wishId}`,
        method: "DELETE",
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),
    deleteWish: builder.mutation({
      query: ({ ecommercetoken, id }) => ({
        url: `user/wish/wish/remove-product/${id}`,
        method: "DELETE",
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),

    deleteCompare: builder.mutation({
      query: (id) => ({
        url: `user/compare/compare/compare-delete/${id}`,
        method: "post",
      }),
    }),

    deleteAccount: builder.mutation({
      query: ({ ecommercetoken, ecomUserId }) => ({
        url: `user/user/user/delete-account/${ecomUserId}`,
        method: "DELETE",
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),
    cancelOrder: builder.mutation({
      query: ({ ecommercetoken, orderId }) => ({
        url: `user/order/order/user-cancelled-order/${orderId}`,
        method: "post",
        headers: {
          "x-auth-token-user": ecommercetoken,
        },
      }),
    }),

    subSubProduct: builder.mutation({
      query: (id) => ({
        url: `user/category/category/subCategory-product/${id}`,
        method: "post",
      }),
    }),
    orderDetails: builder.mutation({
      query: (body) => {
        const { ecommercetoken, id } = body;

        return {
          url: `user/order/order/order-Details/${id}`,
          method: "post",
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    relatedProductDetails: builder.mutation({
      query: (body) => {
        const { id } = body;

        return {
          url: `/user/product/product/releted-product/${id}`,
          method: "post",
          // body: data,
        };
      },
    }),
    updateAddress: builder.mutation({
      query: (body) => {
        const { ecommercetoken, id, ...data } = body;
        return {
          url: `user/address/address/update-address/${id}`,
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    applyCoupan: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: `user/carts/carts/checkValidCoupon`,
          method: "PATCH",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    getBanner: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: `user/product/product/getProductByIds`,
          method: "PATCH",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    singleProductOrder: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: `user/order/order/orderSingleItem`,
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    applyCoupan2: builder.mutation({
      query: (body) => ({
        url: "/user/carts/carts/apply-coupan",
        method: "post",
        body,
      }),
    }),
    updateQuantity: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: `user/carts/carts/updateQuantity`,
          method: "PUT",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    updateCard: builder.mutation({
      query: (body) => {
        console.log("update address", body);
        const { ecommercetoken, id, ...data } = body;
        console.log("update address body data", data);
        return {
          url: `user/carts/carts/saveCarts-update/${id}`,
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
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
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/reports",
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),
    createContact: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/contact/contact/create-contact",
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
        };
      },
    }),

    addReview: builder.mutation({
      query: (body) => {
        const { ecommercetoken, ...data } = body;

        return {
          url: "user/product/product/create-rating",
          method: "post",
          body: data,
          headers: {
            "x-auth-token-user": ecommercetoken,
          },
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
    userSignUpWithPhone: builder.mutation({
      query: (body) => {
        console.log("update login data", body);
        return {
          url: "user/user/user/signup",
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

    varifyOtpLogin: builder.mutation({
      query: (body) => {
        return {
          url: "user/user/user/verify-otp",
          method: "PATCH",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetTrendingProductQuery,
  useGetRelatedProductQuery,
  useGetOrderListMutation,
  useGetOrderListQuery,
  useGetProductListQuery,
  useGetProductListDetailsQuery,
  useGetProductListDetailsMutation,
  useCreateAddressMutation,
  useGetAddressListMutation,
  useGetAddressListQuery,
  useDeleteAddressMutation,
  useUpdateAddressMutation,
  useGetCardListQuery,
  useGetCardListMutation,
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
  useGetCartListheaderMutation,
  useAddToWislistListMutation,
  useCreateContactMutation,
  useAddReviewMutation,
  useRelatedProductDetailsMutation,
  useUpdateQuantityMutation,
  useBlogCommentListQuery,
  useCreateBlogCommentMutation,
  useDeleteAccountMutation,
  useGetPendingOrderQuery,
  useGetSubCategoryListQuery,
  useApplyCoupanMutation,
  useSubCategoryProductListMutation,
  useApplyCoupan2Mutation,
  useTopBannerListMutation,
  useGetBannerListQuery,
  useDeleteCartItemsMutation,
  useUpdateProfileMutation,
  useGetCartListSummeryMutation,
  useGetWishListMutation,
  useDeleteWishListMutation,
  useGetWishListDetailsMutation,
  useAddCompareMutation,
  useSearchProductHeaderMutation,
  useSearchBlogMutation,
  useGetProfileDetailsMutation,
  useUpdateProductRatingMutation,
  useGetTopDiscountProductQuery,
  useGetRecommendedProductQuery,
  useUserSignUpWithPhoneMutation,
  useVarifyOtpLoginMutation,
  useUpdateProfileloginMutation,
  useGetProductListMutation,
  useProceedToPayMutation,
  useDeleteWishMutation,
  useGetBannerMutation,
  useSingleProductOrderMutation,
} = PostApi;
