import UserHttpService from "./UserHttpService";
import Swal from "sweetalert2"

export async function UserSignUp(fullName, email, password) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/user/user/signup`,
            {
                userName: fullName,
                userEmail: email,
                password: password
            }
        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function UserLogin(email, password) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/user/user/login`,
            {
                userEmail: email,
                password: password
            }
        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function SendMail(email) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/user/user/send-mail`,
            {
                userEmail: email
            }
        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function ResetPassword() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/user/user/reset-password/64670722b98bdcab21303848/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDY3MDcyMmI5OGJkY2FiMjEzMDM4NDgiLCJpYXQiOjE2ODUwNzgwODYsImV4cCI6MTY4NTMzNzI4Nn0.7Heal3tpYZoHziuZ5GaQdiaNi6IhQ1wv-H61vRs5GTw`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function EditProfile() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/user/user/edit-profile/6465ed9b8ddefe195c0b6ee8`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function AboutProfile() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/user/user/about-profile/6465ed9b8ddefe195c0b6ee8`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function Logout() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/user/user/logOut`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function UserResetPassword() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/user/user/change-password/64670722b98bdcab21303848`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function VerifyEmail() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/user/user/verify-email`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function DeleteAccount() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/user/user/delete-account/64703e0d4cdf95206d7271f2`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function ProductList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/list`,

        );
        console.log(data);
        // if (data?.error) {
        //     Swal.fire({
        //         title: data?.message,
        //         icon: "error",
        //         confirmButtonText: "ok",
        //         confirmButtonColor: "red"
        //     })
        // }
        return { data };
    }
    catch (error) {
        // if (error.response) {
        //     console.log(error?.response?.data.message);
        //     Swal.fire({
        //         title: error?.response?.data.message,
        //         text: "",
        //         icon: "error",
        //         confirmButtonText: "ok",
        //         confirmButtonColor: "red"
        //     })
        // }
        return (error)
    }
}
export async function ProductDetails(id) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/details/${id}`,

        );
        console.log(data);
        // if (data?.error) {
        //     Swal.fire({
        //         title: data?.message,
        //         icon: "error",
        //         confirmButtonText: "ok",
        //         confirmButtonColor: "red"
        //     })
        // }
        return { data };
    }
    catch (error) {
        // if (error.response) {
        //     console.log(error?.response?.data.message);
        //     Swal.fire({
        //         title: error?.response?.data.message,
        //         text: "",
        //         icon: "error",
        //         confirmButtonText: "ok",
        //         confirmButtonColor: "red"
        //     })
        // }
        return (error)
    }
}
export async function ProductSearch(searchQuery) {
    try {
        // const requestData = {
        //     productName: searchKey
        //   };

        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/search-product`,
            { productName: searchQuery }
        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function RelatedProduct() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/releted-product/644f499f26d12cdc4b7278bb`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function ProductRating(star, product_Id, postedby) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/product-rating`,
            {
                // star: "4",
                // product_Id: "647ddfecede6c9a29c9859ec",
                // postedby: "645a314fe3131d7a071114a6"
                star: star,
                product_Id: product_Id,
                postedby: postedby
            }

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function FilterPrice(currentValue) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/price`,
            {
                Price:currentValue
            }
        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function LowPriceProduct() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/low-price`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function HighPriceProduct() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/high-price`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function AscendingProduct() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/asending-product`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function DescendingProduct() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/descending-product`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function TrandingProduct() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/tranding-product`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function DiscountProduct() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/review?Discount=30`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function ProductReview() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/product-rating`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function RatingProductList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/rating-product?ratings=5`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function HighDiscountList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/product/product/high-Discount-list`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function AddToCart(id, stockQuantity) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/carts/carts/add-cart`,
            {
                carts:[
                    {
                    product_Id:id,
                     quantity:"1"
                    }
                ]
            }
            
        );
        console.log("Add to cart data at http",data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data?.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function DeleteCartProduct(_id) {
    try {
        const { data } = await UserHttpService.delete(
            `${process.env.REACT_APP_APIENDPOINT}user/carts/carts/delete-product/${_id}`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CartList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/carts/carts/carts-list`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function ApplyCoupan(coupanCode) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/carts/carts/apply-coupan`,
            {
                coupanCode:coupanCode
            }

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function OrderSummary() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/carts/carts/carts-summery`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CartCount() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/carts/carts/cart-count`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CreateWish(id) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/wish/wish/add-wish?product_Id=${id}`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function WishListItems() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/wish/wish/wish-List`);
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function DeleteWishList(_id) {
    try {
        const { data } = await UserHttpService.delete(
            `${process.env.REACT_APP_APIENDPOINT}user/wish/wish/wish-delete/${_id}`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function AddReview() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/review/review/add-review`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function ReviewList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/review/review/review-list`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CategoryList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/category/category/category-list`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}

export async function SubCategoryList(id) {
    try {
        if (id === null) {
            throw new Error("Invalid category ID");
        }

        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/category/category/category-subCategory/${id}`
        );

        console.log(data);

        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            });
        }

        return { data };
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.message);
            Swal.fire({
                title: error.response.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            });
        }

        return error;
    }
}

export async function CheckCategoryProduct() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/category/category/category-product/644f499f26d12cdc4b7278bb`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function SearchCategory() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/category/category/search-category`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function TopCategory() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/category/category/top-category`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CreateAddress() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/address/address/create-address`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function AddressList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/address/address/address-list`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function UpdateAddress() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/address/address/update-address/64622ba7c3df788517d16a66`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function DeleteAddress() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/address/address/delete-address/645e21d6c09c043b4010da17`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function BlogList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/blog/blog/blog-list`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function SearchBlog() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/blog/blog/blog-search`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function BlogComments() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/blog/blog/blog-comments`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CommentsList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/blog/blog/comments-list`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CreateCarts() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/carts/carts/create-carts`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CartsList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/carts/carts/saveCarts-list`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CartsUpdate() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/carts/carts/saveCarts-update/64623254c3df788517d16a6c`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function SaveCartsDelete() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/carts/carts/saveCarts-delete/64623254c3df788517d16a6c`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function WishListCount() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/dashboards/dashboards/count-wishlist?=`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function PendingOrder() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/dashboards/dashboards/pending-order`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function TotalOrder() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/dashboards/dashboards/total-order`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CreateOrder() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/order/order/create-order`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function OrderDetails() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/order/order/order-Details/646b57a1252cfdb929adb92f`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function OrderList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/order/order/order-list`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function OrderSuccessDetails() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/order/order/order-success-details`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CreateContact(firstName, lastName, email, phoneNumber, message, latitude, longitude) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/contact/contact/create-contact`,
            {
                firstName: firstName,
                lastName: lastName,
                Email: email,
                mobileNumber: phoneNumber,
                message: message,
                longitude: latitude,
                latitude: longitude
            }

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function EgCreateContact() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/contact/contact/create-contact`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function AddCompare(id) {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/compare/compare/add-compare`,
            {
                product_Id:id
            }
        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function EgAddCompare() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/compare/compare/add-compare`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function CompareList() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/compare/compare/compare-list`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
export async function DeleteCompare() {
    try {
        const { data } = await UserHttpService.post(
            `${process.env.REACT_APP_APIENDPOINT}user/compare/compare/compare-delete/646de425856f1cff7276b872`,

        );
        console.log(data);
        if (data?.error) {
            Swal.fire({
                title: data?.message,
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return { data };
    }
    catch (error) {
        if (error.response) {
            console.log(error?.response?.data.message);
            Swal.fire({
                title: error?.response?.data.message,
                text: "",
                icon: "error",
                confirmButtonText: "ok",
                confirmButtonColor: "red"
            })
        }
        return (error)
    }
}
