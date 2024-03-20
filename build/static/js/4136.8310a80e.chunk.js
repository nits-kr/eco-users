"use strict";(self.webpackChunke_commerce_internal_react=self.webpackChunke_commerce_internal_react||[]).push([[4136],{1276:function(e,s,t){var l=t(1413),a=t(3433),n=t(5273),i=t(9085),r={carts:[],cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],cartTotalQuantity:0,cartTotalAmount:0},c=(0,n.oM)({name:"cart",initialState:r,reducers:{getAllCart:function(e,s){var t;null===e||void 0===e||null===(t=e.carts)||void 0===t||t.push.apply(t,(0,a.Z)(null===s||void 0===s?void 0:s.payload))},addToCart:function(e,s){var t=e.cartItems.findIndex((function(e){return e._id===s.payload._id}));if(t>=0)e.cartItems[t]=(0,l.Z)((0,l.Z)({},e.cartItems[t]),{},{cartQuantity:e.cartItems[t].cartQuantity+1}),i.Am.info("Increased product quantity",{position:"bottom-left"});else{var a=(0,l.Z)((0,l.Z)({},s.payload),{},{cartQuantity:1});e.cartItems.push(a),i.Am.success("Product added to cart",{position:"bottom-left"})}localStorage.setItem("cartItems",JSON.stringify(e.cartItems))},decreaseCart:function(e,s){var t=e.cartItems.findIndex((function(e){return e.id===s.payload.id}));if(e.cartItems[t].cartQuantity>1)e.cartItems[t].cartQuantity-=1,i.Am.info("Decreased ".concat(s.payload.name," product quantity"),{position:"bottom-left"});else if(1===e.cartItems[t].cartQuantity){var l=e.cartItems.filter((function(e){return e.id!==s.payload.id}));e.cartItems=l,i.Am.error("Product removed from cart",{position:"bottom-left"})}localStorage.setItem("cartItems",JSON.stringify(e.cartItems))},removeFromCart:function(e,s){e.cartItems.map((function(t){if(t.id===s.payload.id){var l=e.cartItems.filter((function(e){return e.id!==t.id}));e.cartItems=l,i.Am.error("Product removed from cart",{position:"bottom-left"})}return localStorage.setItem("cartItems",JSON.stringify(e.cartItems)),e}))},getTotals:function(e,s){var t=e.cartItems.reduce((function(e,s){var t=s.price,l=s.cartQuantity,a=t*l;return e.total+=a,e.quantity+=l,e}),{total:0,quantity:0}),l=t.total,a=t.quantity;l=parseFloat(l.toFixed(2)),e.cartTotalQuantity=a,e.cartTotalAmount=l},clearCart:function(e,s){e.cartItems=[],localStorage.setItem("cartItems",JSON.stringify(e.cartItems)),i.Am.error("Cart cleared",{position:"bottom-left"})}}}),o=c.actions;o.addToCart,o.decreaseCart,o.removeFromCart,o.getTotals,o.clearCart,o.getAllCart,c.reducer},153:function(e,s,t){t.r(s);var l=t(4165),a=t(4942),n=t(5861),i=t(1413),r=t(9439),c=t(2791),o=t(7689),d=t(1087),m=t(9085),u=t(7215),h=t.n(u),x=(t(6631),t(1323),t(9806)),v=t(1632),j=t(8858),f=t(8859),p=t(4209),N=t(7242),g=t(5477),b=t(5048),y=(t(1276),t(7280)),k=t(3947),Z=t(184);s.default=function(){var e,s,t,u,I,w,C,U=(0,c.useState)(!1),S=(0,r.Z)(U,2),_=S[0],T=S[1],A=(0,c.useState)(!1),q=(0,r.Z)(A,2),F=q[0],B=q[1],D=(0,c.useState)({}),L=(0,r.Z)(D,2),Q=L[0],z=L[1],P=(0,c.useState)(""),E=(0,r.Z)(P,2),O=(E[0],E[1]),G=(0,c.useState)(!1),W=(0,r.Z)(G,2),R=W[0],H=W[1],$=(0,c.useState)({}),J=(0,r.Z)($,2),M=J[0],Y=J[1],K=(0,b.v9)((function(e){var s;return null===e||void 0===e||null===(s=e.local)||void 0===s?void 0:s.ecomWebtoken})),V=(0,b.v9)((function(e){var s;return null===e||void 0===e||null===(s=e.local)||void 0===s?void 0:s.ecomUserid})),X=(0,g.Pp)(),ee=(0,r.Z)(X,1)[0],se=(0,g.Jb)(),te=(0,r.Z)(se,1)[0],le=(0,g.Q3)(),ae=(0,r.Z)(le,1)[0],ne=(0,c.useState)(""),ie=(0,r.Z)(ne,2),re=ie[0],ce=(ie[1],(0,c.useState)([])),oe=(0,r.Z)(ce,2),de=oe[0],me=oe[1],ue=(0,c.useState)(0),he=(0,r.Z)(ue,2),xe=he[0],ve=he[1];console.log("cartTotal",xe);var je=(0,g.ru)(),fe=(0,r.Z)(je,1)[0],pe=((0,b.v9)((function(e){var s;return null===e||void 0===e||null===(s=e.cart)||void 0===s?void 0:s.carts})),(0,b.I0)());null===(e=localStorage)||void 0===e||e.setItem("cartTotal",xe);var Ne=(0,o.s0)(),ge=(0,c.useState)(""),be=(0,r.Z)(ge,2),ye=be[0];be[1],null===(s=localStorage)||void 0===s||s.setItem("coupanresponse",ye);var ke=function(){var e=(0,n.Z)((0,l.Z)().mark((function e(s){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("HandleIncrease",s),t={varient_Id:s,type:"Add",ecommercetoken:K},H(!0),z((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},s,!0))})),e.prev=4,e.next=7,fe(t);case 7:e.sent&&(Ie(),z((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},s,!1))}))),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Error updating quantity:",e.t0),z((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},s,!1))}));case 15:return e.prev=15,H(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[4,11,15,18]])})));return function(s){return e.apply(this,arguments)}}(),Ze=function(){var e=(0,n.Z)((0,l.Z)().mark((function e(s){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={varient_Id:s,type:"Sub",ecommercetoken:K},Y((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},s,!0))})),H(!0),e.prev=3,e.next=6,fe(t);case 6:e.sent&&(Ie(),Y((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},s,!1))}))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error updating quantity:",e.t0),Y((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},s,!1))}));case 14:return e.prev=14,H(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,10,14,17]])})));return function(s){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){V&&Ie(V)}),[V]);var Ie=function(){var e=(0,n.Z)((0,l.Z)().mark((function e(){var s,t,a,n,i,r,c,o,d,m,u,h;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R&&(null===(s=window)||void 0===s||s.scrollTo(0,0)),t={ecomUserId:V,ecommercetoken:K},e.prev=2,e.next=5,ee(t);case 5:h=e.sent,console.log("respone cart",h),me(null===h||void 0===h||null===(a=h.data)||void 0===a||null===(n=a.results)||void 0===n||null===(i=n.cart)||void 0===i||null===(r=i.products)||void 0===r||null===(c=r[0])||void 0===c?void 0:c.products),O(null===h||void 0===h||null===(o=h.data)||void 0===o||null===(d=o.results)||void 0===d||null===(m=d.cart)||void 0===m||null===(u=m.calculateTotal)||void 0===u?void 0:u[0]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),we=0;null===de||void 0===de||null===(t=de.slice())||void 0===t||null===(u=t.reverse())||void 0===u||u.forEach((function(e){var s,t=((null===e||void 0===e||null===(s=e.varient)||void 0===s?void 0:s.Price)||0)*((null===e||void 0===e?void 0:e.quantity)||1);we+=t})),null===(I=localStorage)||void 0===I||I.setItem("totalSubtotal",we);var Ce=function(){var e=(0,n.Z)((0,l.Z)().mark((function e(s){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te({ecommercetoken:K,id:s});case 3:e.sent&&(Ie(),null===m.Am||void 0===m.Am||m.Am.success("Product has been removed from the Cart!")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){h().replace()}),[]);var Ue=function(){var e=(0,n.Z)((0,l.Z)().mark((function e(s,t){var a,n,r,c,o,d,m,u;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t?(pe((0,k.hR)("Single")),pe((0,k.DE)(null===t||void 0===t?void 0:t.varient_Id))):pe((0,k.hR)("")),s.preventDefault(),a=(0,i.Z)((0,i.Z)((0,i.Z)({},re&&{couponId:re}),(null===t||void 0===t?void 0:t.varient_Id)&&{varient_Id:null===t||void 0===t?void 0:t.varient_Id}),{},{type:t?"Single":"All"},K&&{ecommercetoken:K}),T(!t),B(!!t),e.next=7,ae(a);case 7:n=e.sent,console.log("res payment",n),n&&(Ne("/check-outall"),pe((0,k.Ds)(null===n||void 0===n||null===(r=n.data)||void 0===r||null===(c=r.results)||void 0===c||null===(o=c.cart)||void 0===o?void 0:o.calculateTotal[0])),ve(null===n||void 0===n||null===(d=n.data)||void 0===d||null===(m=d.results)||void 0===m||null===(u=m.cart)||void 0===u?void 0:u.calculateTotal[0])),T(!1),B(!1);case 12:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.Z,{}),(0,Z.jsx)("div",{className:"mobile-menu d-md-none d-block mobile-cart",children:(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{className:"active",children:(0,Z.jsxs)(d.rU,{to:"*",children:[(0,Z.jsx)("i",{className:"iconly-Home icli"}),(0,Z.jsx)("span",{children:"Home"})]})}),(0,Z.jsx)("li",{className:"mobile-category",children:(0,Z.jsxs)(d.rU,{to:"#",children:[(0,Z.jsx)("i",{className:"iconly-Category icli js-link"}),(0,Z.jsx)("span",{children:"Category"})]})}),(0,Z.jsx)("li",{children:(0,Z.jsxs)(d.rU,{to:"/search",className:"search-box",children:[(0,Z.jsx)("i",{className:"iconly-Search icli"}),(0,Z.jsx)("span",{children:"Search"})]})}),(0,Z.jsx)("li",{children:(0,Z.jsxs)(d.rU,{to:"/wishlist",className:"notifi-wishlist",children:[(0,Z.jsx)("i",{className:"iconly-Heart icli"}),(0,Z.jsx)("span",{children:"My Wish"})]})}),(0,Z.jsx)("li",{children:(0,Z.jsxs)(d.rU,{to:"/cart",children:[(0,Z.jsx)("i",{className:"iconly-Bag-2 icli fly-cate"}),(0,Z.jsx)("span",{children:"Cart"})]})})]})}),(0,Z.jsx)("section",{className:"breadscrumb-section pt-0",children:(0,Z.jsx)("div",{className:"container-fluid-lg",children:(0,Z.jsx)("div",{className:"row",children:(0,Z.jsx)("div",{className:"col-12",children:(0,Z.jsxs)("div",{className:"breadscrumb-contain",children:[(0,Z.jsx)("h2",{children:"Cart"}),(0,Z.jsx)("nav",{children:(0,Z.jsxs)("ol",{className:"breadcrumb mb-0",children:[(0,Z.jsx)("li",{className:"breadcrumb-item",children:(0,Z.jsx)(d.rU,{to:"/index",children:(0,Z.jsx)("i",{className:"fa-solid fa-house"})})}),(0,Z.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Cart"})]})})]})})})})}),(0,Z.jsx)("section",{className:"cart-section section-b-space",children:(0,Z.jsx)("div",{className:"container-fluid-lg",children:(0,Z.jsxs)("div",{className:"row g-sm-5 g-3",children:[(0,Z.jsx)("div",{className:"col-xxl-".concat((de&&de.length,"12")),children:(null===de||void 0===de?void 0:de.length)>0?(0,Z.jsx)("div",{className:"cart-table",children:(0,Z.jsx)("div",{className:"table-responsive-xl",children:(0,Z.jsx)("table",{className:"table",style:{marginLeft:"-21px"},children:(0,Z.jsx)("tbody",{children:null===de||void 0===de||null===(w=de.slice())||void 0===w||null===(C=w.reverse())||void 0===C?void 0:C.map((function(e,s){var t,l,a,n,i,r;null===e||void 0===e||null===(t=e.varient)||void 0===t||t.Price,null===e||void 0===e||e.quantity;return(0,Z.jsxs)("tr",{className:"product-box-contain",children:[(0,Z.jsx)("td",{className:"product-detail",children:(0,Z.jsxs)("div",{className:"product border-0",children:[(0,Z.jsx)(d.rU,{to:"/product-details-page/".concat(null===e||void 0===e||null===(l=e.productId)||void 0===l?void 0:l._id),className:"product-image",children:(0,Z.jsx)("img",{src:null===e||void 0===e?void 0:e.product_Pic[0],className:"img-fluid  lazyload",alt:""})}),(0,Z.jsx)("div",{className:"product-detail",children:(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{className:"name",children:(0,Z.jsx)(d.rU,{to:"/product",children:(0,Z.jsx)("strong",{children:null===e||void 0===e||null===(a=e.productId)||void 0===a||null===(n=a.productName_en)||void 0===n||null===(i=n.split(" "))||void 0===i||null===(r=i.slice(0,3))||void 0===r?void 0:r.join(" ")})})}),(0,Z.jsxs)("li",{className:"text-content",children:[(0,Z.jsx)("span",{className:"text-title",children:"Sold By:"})," ","Fresho"]}),(0,Z.jsxs)("li",{className:"text-content",children:[(0,Z.jsx)("span",{className:"text-title",children:"SKU :"})," ",null===e||void 0===e?void 0:e.SKU]})]})})]})}),(0,Z.jsx)("td",{className:"quantity",children:(0,Z.jsx)("div",{className:"quantity-price",children:(0,Z.jsx)("div",{className:"cart_qty",children:(0,Z.jsx)("div",{className:"input-group",children:(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,Z.jsx)("div",{className:"table-title text-content",children:"Qty"}),(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[" ",1===(null===e||void 0===e?void 0:e.quantity)?(0,Z.jsx)("div",{style:{cursor:"not-allowed"},children:(0,Z.jsx)("button",{type:"button",className:"btn qty-left-minus me-2","data-type":"minus","data-field":"",style:{filter:"blur(0.7px)",background:"lightgray",color:"darkgray"},disabled:!0,children:(0,Z.jsx)("i",{className:"fa fa-minus ms-0","aria-hidden":"true"})})}):(0,Z.jsx)("div",{children:(0,Z.jsx)("button",{type:"button",className:"btn qty-left-minus me-2","data-type":"minus","data-field":"",onClick:function(){return Ze(null===e||void 0===e?void 0:e.varient_Id)},disabled:M[null===e||void 0===e?void 0:e.varient_Id]||1===(null===e||void 0===e?void 0:e.quantity),children:M[null===e||void 0===e?void 0:e.varient_Id]?(0,Z.jsx)(y.Z,{}):(0,Z.jsx)("i",{className:"fa fa-minus ms-0","aria-hidden":"true"})})}),(0,Z.jsx)("div",{children:null===e||void 0===e?void 0:e.quantity}),(0,Z.jsx)("div",{children:(0,Z.jsx)("button",{type:"button",className:"btn qty-right-plus ms-2","data-type":"plus","data-field":"",onClick:function(){return ke(null===e||void 0===e?void 0:e.varient_Id)},disabled:Q[null===e||void 0===e?void 0:e.varient_Id]||(null===e||void 0===e?void 0:e.quantity)===(null===e||void 0===e?void 0:e.stockQuantity),children:Q[null===e||void 0===e?void 0:e.varient_Id]?(0,Z.jsx)(y.Z,{}):(0,Z.jsx)("i",{className:"fa fa-plus ms-0","aria-hidden":"true"})})})]})]})})})})}),(0,Z.jsxs)("td",{className:"subtotal",children:[(0,Z.jsx)("h4",{className:"table-title text-content",children:"Total"}),(0,Z.jsxs)("h5",{children:["$",null===e||void 0===e?void 0:e.Price]})]}),(0,Z.jsxs)("td",{className:"save-remove",children:[(0,Z.jsx)("h3",{className:"table-title text-content",style:{display:"flex",textAlign:"center",justifyContent:"center"},children:(0,Z.jsx)("strong",{children:"Action"})}),(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[(0,Z.jsx)("button",{className:"btn btn-animation proceed-btn fw-bold me-2",style:{height:"35px",width:"35px",cursor:F?"not-allowed":"pointer"},onClick:function(s){F||Ue(s,e)},children:"Buy"}),(0,Z.jsx)(d.rU,{to:"#",className:"btn btn-animation proceed-btn fw-bold",style:{height:"35px",width:"35px"},title4:"Wishlist",onClick:function(){return Ce(null===e||void 0===e?void 0:e.cart_Id)},children:(0,Z.jsx)(x.G,{icon:v.$aW})})]})]})]},s)}))})})})}):(0,Z.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[(0,Z.jsx)("img",{src:"../assets/images/emptycart.webp",className:"img-fluid  lazyload ",alt:"",height:500,width:500}),(0,Z.jsx)("div",{className:"d-flex align-items-center justify-content-center mt-3",children:(0,Z.jsx)("h2",{children:(0,Z.jsx)("strong",{children:"Your Cart Is Empty"})})}),(0,Z.jsx)(d.rU,{to:"/shop",className:" btn btn-animation proceed-btn fw-bold d-flex align-items-center justify-content-center mt-3",children:"Shop Now"})]})}),(0,Z.jsxs)("div",{className:"button-group cart-button ".concat((null===de||void 0===de?void 0:de.length)>0?"d-flex":"d-none","  justify-content-between "),style:{flexDirection:window.innerWidth<=768?"column":"row"},children:[(0,Z.jsxs)("button",{onClick:function(e){Ne("/shop")},className:"btn btn-light shopping-button text-dark ".concat(window.innerWidth<=768?"w-100":"w-25"," mt-3"),style:{backgroundColor:"#f8f9fa",height:"50px"},children:[(0,Z.jsx)("i",{className:"fa-solid fa-arrow-left-long me-2"}),"Return To Shopping"]}),(0,Z.jsx)("button",{className:"btn btn-animation shopping-button text-light ".concat(window.innerWidth<=768?"w-100":"w-25"," mt-3"),onClick:function(e){return Ue(e)},children:_?(0,Z.jsx)(y.Z,{}):(0,Z.jsxs)("span",{children:["Process To Checkout",(0,Z.jsx)("i",{className:"fa-solid fa-arrow-right-long ms-2"})]})})]})]})})}),(0,Z.jsx)(f.Z,{}),(0,Z.jsx)(p.Z,{}),(0,Z.jsx)(N.Z,{}),(0,Z.jsx)("div",{className:"bg-overlay"})]})}},4209:function(e,s,t){t(2791);var l=t(1087),a=t(184);s.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"modal fade theme-modal deal-modal",id:"deal-box",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,a.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-fullscreen-sm-down",children:(0,a.jsxs)("div",{className:"modal-content",children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h5",{className:"modal-title w-100",id:"deal_today",children:"Deal Today"}),(0,a.jsx)("p",{className:"mt-1 text-content",children:"Recommended deals for you."})]}),(0,a.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",children:(0,a.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,a.jsx)("div",{className:"modal-body",children:(0,a.jsx)("div",{className:"deal-offer-box",children:(0,a.jsxs)("ul",{className:"deal-offer-list",children:[(0,a.jsx)("li",{className:"list-1",children:(0,a.jsxs)("div",{className:"deal-offer-contain",children:[(0,a.jsx)(l.rU,{to:"/shop",className:"deal-image",children:(0,a.jsx)("img",{src:"../assets/images/vegetable/product/10.png",className:" lazyload",alt:""})}),(0,a.jsxs)(l.rU,{to:"/shop",className:"deal-contain",children:[(0,a.jsx)("h5",{children:"Blended Instant Coffee 50 g Buy 1 Get 1 Free"}),(0,a.jsxs)("h6",{children:["$52.57 ",(0,a.jsx)("del",{children:"57.62"})," ",(0,a.jsx)("span",{children:"500 G"})]})]})]})}),(0,a.jsx)("li",{className:"list-2",children:(0,a.jsxs)("div",{className:"deal-offer-contain",children:[(0,a.jsx)(l.rU,{to:"/shop",className:"deal-image",children:(0,a.jsx)("img",{src:"../assets/images/vegetable/product/11.png",className:" lazyload",alt:""})}),(0,a.jsxs)(l.rU,{to:"/shop",className:"deal-contain",children:[(0,a.jsx)("h5",{children:"Blended Instant Coffee 50 g Buy 1 Get 1 Free"}),(0,a.jsxs)("h6",{children:["$52.57 ",(0,a.jsx)("del",{children:"57.62"})," ",(0,a.jsx)("span",{children:"500 G"})]})]})]})}),(0,a.jsx)("li",{className:"list-3",children:(0,a.jsxs)("div",{className:"deal-offer-contain",children:[(0,a.jsx)(l.rU,{to:"/shop",className:"deal-image",children:(0,a.jsx)("img",{src:"../assets/images/vegetable/product/12.png",className:" lazyload",alt:""})}),(0,a.jsxs)(l.rU,{to:"/shop",className:"deal-contain",children:[(0,a.jsx)("h5",{children:"Blended Instant Coffee 50 g Buy 1 Get 1 Free"}),(0,a.jsxs)("h6",{children:["$52.57 ",(0,a.jsx)("del",{children:"57.62"})," ",(0,a.jsx)("span",{children:"500 G"})]})]})]})}),(0,a.jsx)("li",{className:"list-1",children:(0,a.jsxs)("div",{className:"deal-offer-contain",children:[(0,a.jsx)(l.rU,{to:"/shop",className:"deal-image",children:(0,a.jsx)("img",{src:"../assets/images/vegetable/product/13.png",className:" lazyload",alt:""})}),(0,a.jsxs)(l.rU,{to:"/shop",className:"deal-contain",children:[(0,a.jsx)("h5",{children:"Blended Instant Coffee 50 g Buy 1 Get 1 Free"}),(0,a.jsxs)("h6",{children:["$52.57 ",(0,a.jsx)("del",{children:"57.62"})," ",(0,a.jsx)("span",{children:"500 G"})]})]})]})})]})})})]})})})})}},8859:function(e,s,t){var l=t(1413),a=t(4165),n=t(5861),i=t(9439),r=t(2791),c=t(1087),o=t(5477),d=t(5048),m=t(184);s.Z=function(){var e=(0,d.v9)((function(e){var s;return null===e||void 0===e||null===(s=e.local)||void 0===s?void 0:s.ecomWebtoken})),s=((0,d.v9)((function(e){var s;return null===e||void 0===e||null===(s=e.local)||void 0===s?void 0:s.ecomUserid})),(0,o.j2)()),t=(0,o.QQ)(),u=(0,i.Z)(t,1)[0],h=(0,r.useState)([]),x=(0,i.Z)(h,2),v=x[0],j=x[1],f=(0,r.useState)([]),p=(0,i.Z)(f,2),N=p[0],g=p[1];(0,r.useEffect)((function(){var e,t,l,a,n=null!==(e=null===s||void 0===s||null===(t=s.data)||void 0===t||null===(l=t.results)||void 0===l||null===(a=l.list)||void 0===a?void 0:a.slice().reverse())&&void 0!==e?e:[];g(n)}),[s]),(0,r.useEffect)((function(){b()}),[]);var b=function(){var s=(0,n.Z)((0,a.Z)().mark((function s(){var t,l,n;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,u({ecommercetoken:e});case 2:n=s.sent,console.log("res",n),j(null===n||void 0===n||null===(t=n.data)||void 0===t||null===(l=t.results)||void 0===l?void 0:l.details);case 5:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("footer",{className:"section-t-space",children:(0,m.jsxs)("div",{className:"container-fluid-lg",children:[(0,m.jsx)("div",{className:"service-section",children:(0,m.jsx)("div",{className:"row g-3",children:(0,m.jsx)("div",{className:"col-12",children:(0,m.jsxs)("div",{className:"service-contain",children:[(0,m.jsxs)("div",{className:"service-box",children:[(0,m.jsx)("div",{className:"service-image",children:(0,m.jsx)("img",{src:"../../assets/svg/product.svg",className:" lazyload",alt:""})}),(0,m.jsx)("div",{className:"service-detail",children:(0,m.jsx)("h5",{children:"Every Fresh Products"})})]}),(0,m.jsxs)("div",{className:"service-box",children:[(0,m.jsx)("div",{className:"service-image",children:(0,m.jsx)("img",{src:"../../assets/svg/delivery.svg",className:" lazyload",alt:""})}),(0,m.jsx)("div",{className:"service-detail",children:(0,m.jsx)("h5",{children:"Free Delivery For Order Over $50"})})]}),(0,m.jsxs)("div",{className:"service-box",children:[(0,m.jsx)("div",{className:"service-image",children:(0,m.jsx)("img",{src:"../../assets/svg/discount.svg",className:" lazyload",alt:""})}),(0,m.jsx)("div",{className:"service-detail",children:(0,m.jsx)("h5",{children:"Daily Mega Discounts"})})]}),(0,m.jsxs)("div",{className:"service-box",children:[(0,m.jsx)("div",{className:"service-image",children:(0,m.jsx)("img",{src:"../../assets/svg/market.svg",className:" lazyload",alt:""})}),(0,m.jsx)("div",{className:"service-detail",children:(0,m.jsx)("h5",{children:"Best Price On The Market"})})]})]})})})}),(0,m.jsx)("div",{className:"main-footer section-b-space section-t-space",children:(0,m.jsxs)("div",{className:"row g-md-4 g-3",children:[(0,m.jsx)("div",{className:"col-xl-3 col-lg-4 col-sm-6",children:(0,m.jsxs)("div",{className:"footer-logo",children:[(0,m.jsx)("div",{className:"theme-logo",children:(0,m.jsx)(c.rU,{to:"/index",children:(0,m.jsx)("img",{src:"../../assets/images/logo/logo.png",className:" lazyload",alt:""})})}),(0,m.jsxs)("div",{className:"footer-logo-contain",children:[(0,m.jsx)("p",{children:"We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a perfect place for a couple."}),(0,m.jsxs)("ul",{className:"address",children:[(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{"data-feather":"home"}),(0,m.jsx)(c.rU,{to:"#",children:"1418 Riverwood Drive, CA 96052, US"})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{"data-feather":"mail"}),(0,m.jsx)(c.rU,{to:"#",children:"support@dummy.com"})]})]})]})]})}),(0,m.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6",children:[(0,m.jsx)("div",{className:"footer-title",children:(0,m.jsx)("h4",{children:"Categories"})}),(0,m.jsx)("div",{className:"footer-contain",children:(0,m.jsx)("ul",{children:null===N||void 0===N?void 0:N.map((function(e,s){return(0,m.jsx)("li",{children:(0,m.jsx)(c.rU,{to:"/shop",state:(0,l.Z)({URLType:"cate"},{category_Id:null===e||void 0===e?void 0:e._id}),onClick:function(){return window.scrollTo(0,0)},className:"text-content",children:null===e||void 0===e?void 0:e.categoryName_en})},s)}))})})]}),(0,m.jsxs)("div",{className:"col-xl col-lg-2 col-sm-3",children:[(0,m.jsx)("div",{className:"footer-title",children:(0,m.jsx)("h4",{children:"Useful Links"})}),(0,m.jsx)("div",{className:"footer-contain",children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(c.rU,{to:"/",className:"text-content",onClick:function(){return window.scrollTo(0,0)},children:"Home"})}),(0,m.jsx)("li",{children:(0,m.jsx)(c.rU,{to:"/shop",className:"text-content",children:"Shop"})}),(0,m.jsx)("li",{children:(0,m.jsx)(c.rU,{to:"/about-us",className:"text-content",children:"About Us"})}),(0,m.jsx)("li",{children:(0,m.jsx)(c.rU,{to:"https://www.techgropse.com/",target:"_blank",className:"text-content",children:"Blog"})}),(0,m.jsx)("li",{children:(0,m.jsx)(c.rU,{to:"/contact-us",className:"text-content",children:"Contact Us"})})]})})]}),(0,m.jsxs)("div",{className:"col-xl-2 col-sm-3",children:[(0,m.jsx)("div",{className:"footer-title",children:(0,m.jsx)("h4",{children:"Help Center"})}),(0,m.jsx)("div",{className:"footer-contain",children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{style:{display:e?"":"none"},children:(0,m.jsx)(c.rU,{to:"/order-success",className:"text-content",children:"Your Order"})}),(0,m.jsx)("li",{style:{display:e?"":"none"},children:(0,m.jsx)(c.rU,{to:"/user-dashboard",className:"text-content",children:"Your Account"})}),(0,m.jsx)("li",{style:{display:e?"":"none"},children:(0,m.jsx)(c.rU,{to:"/order-success",className:"text-content",children:"Track Order"})}),(0,m.jsx)("li",{style:{display:e?"":"none"},children:(0,m.jsx)(c.rU,{to:"/wishlist",className:"text-content",children:"Your Wishlist"})}),(0,m.jsx)("li",{children:(0,m.jsx)(c.rU,{to:"/shop",className:"text-content",children:"Search"})}),(0,m.jsx)("li",{children:(0,m.jsx)(c.rU,{to:"/faq",className:"text-content",children:"FAQ"})})]})})]}),(0,m.jsxs)("div",{className:"col-xl-3 col-lg-4 col-sm-6",children:[(0,m.jsx)("div",{className:"footer-title",children:(0,m.jsx)("h4",{children:"Contact Us"})}),(0,m.jsx)("div",{className:"footer-contact",children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsxs)("div",{className:"footer-number",children:[(0,m.jsx)("i",{"data-feather":"phone"}),(0,m.jsxs)("div",{className:"contact-number",children:[(0,m.jsx)("h6",{className:"text-content",children:"Hotline 24/7 :"}),(0,m.jsx)("a",{href:"tel:".concat(v.mobileNumber),children:(0,m.jsx)("h5",{children:v.mobileNumber})})]})]})}),(0,m.jsx)("li",{children:(0,m.jsxs)("div",{className:"footer-number",children:[(0,m.jsx)("i",{"data-feather":"mail"}),(0,m.jsxs)("div",{className:"contact-number",children:[(0,m.jsx)("h6",{className:"text-content",children:"Email Address :"}),(0,m.jsx)("a",{href:"mailto:".concat(v.email),children:(0,m.jsx)("h5",{children:v.email})})]})]})}),(0,m.jsxs)("li",{className:"social-app mb-0",children:[(0,m.jsx)("h5",{className:"mb-2 text-content",children:"Download App :"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{className:"mb-0",children:(0,m.jsx)("a",{href:v.playStoreLink,target:"_blank",children:(0,m.jsx)("img",{src:"../../assets/images/playstore.svg",className:"lazyload",alt:""})})}),(0,m.jsx)("li",{className:"mb-0",children:(0,m.jsx)("a",{href:v.appStoreLink,target:"_blank",children:(0,m.jsx)("img",{src:"../../assets/images/appstore.svg",className:"lazyload",alt:""})})})]})]})]})})]})]})}),(0,m.jsxs)("div",{className:"sub-footer section-small-space",children:[(0,m.jsx)("div",{className:"reserve",children:(0,m.jsx)("h6",{className:"text-content",children:"2023 Copyright By TechGropse eCommerce"})}),(0,m.jsx)("div",{className:"payment",children:(0,m.jsx)("img",{src:"../../assets/images/payment/1.png",className:" lazyload",alt:""})}),(0,m.jsxs)("div",{className:"social-link",children:[(0,m.jsx)("h6",{className:"text-content",children:"Stay connected :"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:v.facebookLink,target:"_blank",children:(0,m.jsx)("i",{className:"fa-brands fa-facebook-f"})})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:v.twitterLink,target:"_blank",children:(0,m.jsx)("i",{className:"fa-brands fa-twitter"})})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:v.linkedInLink,target:"_blank",children:(0,m.jsx)("i",{className:"fa-brands fa-linkedin-in"})})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:v.youtubeLink,target:"_blank",children:(0,m.jsx)("i",{className:"fa-brands fa-youtube"})})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:v.instagramLink,target:"_blank",children:(0,m.jsx)("i",{className:"fa-brands fa-instagram"})})})]})]})]})]})})})}},7242:function(e,s,t){t(2791);var l=t(1087),a=t(184);s.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"theme-option",children:[(0,a.jsxs)("div",{className:"setting-box",children:[(0,a.jsx)("button",{className:"btn setting-button",children:(0,a.jsx)("i",{className:"fa-solid fa-gear"})}),(0,a.jsx)("div",{className:"theme-setting-2",children:(0,a.jsx)("div",{className:"theme-box",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:"setting-name",children:(0,a.jsx)("h4",{children:"Color"})}),(0,a.jsx)("div",{className:"theme-setting-button color-picker",children:(0,a.jsxs)("form",{className:"form-control",children:[(0,a.jsx)("label",{htmlFor:"colorPick",className:"form-label mb-0",children:"Theme Color"}),(0,a.jsx)("input",{type:"color",className:"form-control form-control-color",id:"colorPick",defaultValue:"#0da487",title:"Choose your color"})]})})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:"setting-name",children:(0,a.jsx)("h4",{children:"Dark"})}),(0,a.jsxs)("div",{className:"theme-setting-button",children:[(0,a.jsx)("button",{className:"btn btn-2 outline",id:"darkButton",children:"Dark"}),(0,a.jsx)("button",{className:"btn btn-2 unline",id:"lightButton",children:"Light"})]})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:"setting-name",children:(0,a.jsx)("h4",{children:"RTL"})}),(0,a.jsxs)("div",{className:"theme-setting-button rtl",children:[(0,a.jsx)("button",{className:"btn btn-2 rtl-unline",children:"LTR"}),(0,a.jsx)("button",{className:"btn btn-2 rtl-outline",children:"RTL"})]})]})]})})})]}),(0,a.jsx)("div",{className:"back-to-top",children:(0,a.jsx)(l.rU,{id:"back-to-top",to:"#",children:(0,a.jsx)("i",{className:"fas fa-chevron-up"})})})]})})}}}]);
//# sourceMappingURL=4136.8310a80e.chunk.js.map