"use strict";(self.webpackChunke_commerce_internal_react=self.webpackChunke_commerce_internal_react||[]).push([[4136],{153:function(e,s,l){l.r(s);var a=l(4165),n=l(4942),i=l(5861),t=l(1413),c=l(9439),r=l(2791),d=l(7689),o=l(1087),h=l(9085),m=l(7215),x=l.n(m),u=(l(6631),l(1323),l(9806)),j=l(1632),v=l(8858),p=l(8859),N=l(4209),f=l(7242),g=l(7339),b=l(5048),y=(l(1276),l(7280)),Z=l(3947),k=l(184);s.default=function(){var e,s,l,m,w,U,C,I=(0,r.useState)(!1),_=(0,c.Z)(I,2),S=_[0],T=_[1],B=(0,r.useState)(!1),q=(0,c.Z)(B,2),z=q[0],D=q[1],F=(0,r.useState)({}),A=(0,c.Z)(F,2),P=A[0],E=A[1],G=(0,r.useState)(""),R=(0,c.Z)(G,2),H=(R[0],R[1]),L=(0,r.useState)(!1),W=(0,c.Z)(L,2),$=W[0],O=W[1],Q=(0,r.useState)({}),M=(0,c.Z)(Q,2),Y=M[0],K=M[1],J=(0,b.v9)((function(e){var s;return null===e||void 0===e||null===(s=e.local)||void 0===s?void 0:s.ecomWebtoken})),V=(0,b.v9)((function(e){var s;return null===e||void 0===e||null===(s=e.local)||void 0===s?void 0:s.ecomUserid})),X=(0,g.Pp)(),ee=(0,c.Z)(X,1)[0],se=(0,g.Jb)(),le=(0,c.Z)(se,1)[0],ae=(0,g.Q3)(),ne=(0,c.Z)(ae,1)[0],ie=(0,r.useState)(""),te=(0,c.Z)(ie,2),ce=te[0],re=(te[1],(0,r.useState)([])),de=(0,c.Z)(re,2),oe=de[0],he=de[1],me=(0,r.useState)(0),xe=(0,c.Z)(me,2),ue=xe[0],je=xe[1];console.log("cartTotal",ue);var ve=(0,g.ru)(),pe=(0,c.Z)(ve,1)[0],Ne=((0,b.v9)((function(e){var s;return null===e||void 0===e||null===(s=e.cart)||void 0===s?void 0:s.carts})),(0,b.I0)());null===(e=localStorage)||void 0===e||e.setItem("cartTotal",ue);var fe=(0,d.s0)(),ge=(0,r.useState)(""),be=(0,c.Z)(ge,2),ye=be[0];be[1],null===(s=localStorage)||void 0===s||s.setItem("coupanresponse",ye);var Ze=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(s){var l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("HandleIncrease",s),l={varient_Id:s,type:"Add",ecommercetoken:J},O(!0),E((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,n.Z)({},s,!0))})),e.prev=4,e.next=7,pe(l);case 7:e.sent&&(we(),E((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,n.Z)({},s,!1))}))),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Error updating quantity:",e.t0),E((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,n.Z)({},s,!1))}));case 15:return e.prev=15,O(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[4,11,15,18]])})));return function(s){return e.apply(this,arguments)}}(),ke=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(s){var l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={varient_Id:s,type:"Sub",ecommercetoken:J},K((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,n.Z)({},s,!0))})),O(!0),e.prev=3,e.next=6,pe(l);case 6:e.sent&&(we(),K((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,n.Z)({},s,!1))}))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error updating quantity:",e.t0),K((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,n.Z)({},s,!1))}));case 14:return e.prev=14,O(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,10,14,17]])})));return function(s){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){V&&we(V)}),[V]);var we=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var s,l,n,i,t,c,r,d,o,h,m,x;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return $&&(null===(s=window)||void 0===s||s.scrollTo(0,0)),l={ecomUserId:V,ecommercetoken:J},e.prev=2,e.next=5,ee(l);case 5:x=e.sent,console.log("respone cart",x),he(null===x||void 0===x||null===(n=x.data)||void 0===n||null===(i=n.results)||void 0===i||null===(t=i.cart)||void 0===t||null===(c=t.products)||void 0===c||null===(r=c[0])||void 0===r?void 0:r.products),H(null===x||void 0===x||null===(d=x.data)||void 0===d||null===(o=d.results)||void 0===o||null===(h=o.cart)||void 0===h||null===(m=h.calculateTotal)||void 0===m?void 0:m[0]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),Ue=0;null===oe||void 0===oe||null===(l=oe.slice())||void 0===l||null===(m=l.reverse())||void 0===m||m.forEach((function(e){var s,l=((null===e||void 0===e||null===(s=e.varient)||void 0===s?void 0:s.Price)||0)*((null===e||void 0===e?void 0:e.quantity)||1);Ue+=l})),null===(w=localStorage)||void 0===w||w.setItem("totalSubtotal",Ue);var Ce=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(s){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le({ecommercetoken:J,id:s});case 3:e.sent&&(we(),null===h.Am||void 0===h.Am||h.Am.success("Product has been removed from the Cart!")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){x().replace()}),[]);var Ie=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(s,l){var n,i,c,r,d,o,h,m;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l?(Ne((0,Z.hR)("Single")),Ne((0,Z.DE)(null===l||void 0===l?void 0:l.varient_Id))):Ne((0,Z.hR)("")),s.preventDefault(),n=(0,t.Z)((0,t.Z)((0,t.Z)({},ce&&{couponId:ce}),(null===l||void 0===l?void 0:l.varient_Id)&&{varient_Id:null===l||void 0===l?void 0:l.varient_Id}),{},{type:l?"Single":"All"},J&&{ecommercetoken:J}),T(!l),D(!!l),e.next=7,ne(n);case 7:i=e.sent,console.log("res payment",i),i&&(fe("/check-outall"),Ne((0,Z.Ds)(null===i||void 0===i||null===(c=i.data)||void 0===c||null===(r=c.results)||void 0===r||null===(d=r.cart)||void 0===d?void 0:d.calculateTotal[0])),je(null===i||void 0===i||null===(o=i.data)||void 0===o||null===(h=o.results)||void 0===h||null===(m=h.cart)||void 0===m?void 0:m.calculateTotal[0])),T(!1),D(!1);case 12:case"end":return e.stop()}}),e)})));return function(s,l){return e.apply(this,arguments)}}();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(v.Z,{}),(0,k.jsx)("div",{className:"mobile-menu d-md-none d-block mobile-cart",children:(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{className:"active",children:(0,k.jsxs)(o.rU,{to:"*",children:[(0,k.jsx)("i",{className:"iconly-Home icli"}),(0,k.jsx)("span",{children:"Home"})]})}),(0,k.jsx)("li",{className:"mobile-category",children:(0,k.jsxs)(o.rU,{to:"#",children:[(0,k.jsx)("i",{className:"iconly-Category icli js-link"}),(0,k.jsx)("span",{children:"Category"})]})}),(0,k.jsx)("li",{children:(0,k.jsxs)(o.rU,{to:"/search",className:"search-box",children:[(0,k.jsx)("i",{className:"iconly-Search icli"}),(0,k.jsx)("span",{children:"Search"})]})}),(0,k.jsx)("li",{children:(0,k.jsxs)(o.rU,{to:"/wishlist",className:"notifi-wishlist",children:[(0,k.jsx)("i",{className:"iconly-Heart icli"}),(0,k.jsx)("span",{children:"My Wish"})]})}),(0,k.jsx)("li",{children:(0,k.jsxs)(o.rU,{to:"/cart",children:[(0,k.jsx)("i",{className:"iconly-Bag-2 icli fly-cate"}),(0,k.jsx)("span",{children:"Cart"})]})})]})}),(0,k.jsx)("section",{className:"breadscrumb-section pt-0",children:(0,k.jsx)("div",{className:"container-fluid-lg",children:(0,k.jsx)("div",{className:"row",children:(0,k.jsx)("div",{className:"col-12",children:(0,k.jsxs)("div",{className:"breadscrumb-contain",children:[(0,k.jsx)("h2",{children:"Cart"}),(0,k.jsx)("nav",{children:(0,k.jsxs)("ol",{className:"breadcrumb mb-0",children:[(0,k.jsx)("li",{className:"breadcrumb-item",children:(0,k.jsx)(o.rU,{to:"/index",children:(0,k.jsx)("i",{className:"fa-solid fa-house"})})}),(0,k.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Cart"})]})})]})})})})}),(0,k.jsx)("section",{className:"cart-section section-b-space",children:(0,k.jsx)("div",{className:"container-fluid-lg",children:(0,k.jsxs)("div",{className:"row g-sm-5 g-3",children:[(0,k.jsx)("div",{className:"col-xxl-".concat((oe&&oe.length,"12")),children:(null===oe||void 0===oe?void 0:oe.length)>0?(0,k.jsx)("div",{className:"cart-table",children:(0,k.jsx)("div",{className:"table-responsive-xl",children:(0,k.jsx)("table",{className:"table",style:{marginLeft:"-21px"},children:(0,k.jsx)("tbody",{children:null===oe||void 0===oe||null===(U=oe.slice())||void 0===U||null===(C=U.reverse())||void 0===C?void 0:C.map((function(e,s){var l,a,n,i,t,c;null===e||void 0===e||null===(l=e.varient)||void 0===l||l.Price,null===e||void 0===e||e.quantity;return(0,k.jsxs)("tr",{className:"product-box-contain",children:[(0,k.jsx)("td",{className:"product-detail",children:(0,k.jsxs)("div",{className:"product border-0",children:[(0,k.jsx)(o.rU,{to:"/product-details-page/".concat(null===e||void 0===e||null===(a=e.productId)||void 0===a?void 0:a._id),className:"product-image",children:(0,k.jsx)("img",{src:null===e||void 0===e?void 0:e.product_Pic[0],className:"img-fluid  lazyload",alt:""})}),(0,k.jsx)("div",{className:"product-detail",children:(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{className:"name",children:(0,k.jsx)(o.rU,{to:"/product",children:(0,k.jsx)("strong",{children:null===e||void 0===e||null===(n=e.productId)||void 0===n||null===(i=n.productName_en)||void 0===i||null===(t=i.split(" "))||void 0===t||null===(c=t.slice(0,3))||void 0===c?void 0:c.join(" ")})})}),(0,k.jsxs)("li",{className:"text-content",children:[(0,k.jsx)("span",{className:"text-title",children:"Sold By:"})," ","Fresho"]}),(0,k.jsxs)("li",{className:"text-content",children:[(0,k.jsx)("span",{className:"text-title",children:"SKU :"})," ",null===e||void 0===e?void 0:e.SKU]})]})})]})}),(0,k.jsx)("td",{className:"quantity",children:(0,k.jsx)("div",{className:"quantity-price",children:(0,k.jsx)("div",{className:"cart_qty",children:(0,k.jsx)("div",{className:"input-group",children:(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,k.jsx)("div",{className:"table-title text-content",children:"Qty"}),(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[" ",1===(null===e||void 0===e?void 0:e.quantity)?(0,k.jsx)("div",{style:{cursor:"not-allowed"},children:(0,k.jsx)("button",{type:"button",className:"btn qty-left-minus me-2","data-type":"minus","data-field":"",style:{filter:"blur(0.7px)",background:"lightgray",color:"darkgray"},disabled:!0,children:(0,k.jsx)("i",{className:"fa fa-minus ms-0","aria-hidden":"true"})})}):(0,k.jsx)("div",{children:(0,k.jsx)("button",{type:"button",className:"btn qty-left-minus me-2","data-type":"minus","data-field":"",onClick:function(){return ke(null===e||void 0===e?void 0:e.varient_Id)},disabled:Y[null===e||void 0===e?void 0:e.varient_Id]||1===(null===e||void 0===e?void 0:e.quantity),children:Y[null===e||void 0===e?void 0:e.varient_Id]?(0,k.jsx)(y.Z,{}):(0,k.jsx)("i",{className:"fa fa-minus ms-0","aria-hidden":"true"})})}),(0,k.jsx)("div",{children:null===e||void 0===e?void 0:e.quantity}),(0,k.jsx)("div",{children:(0,k.jsx)("button",{type:"button",className:"btn qty-right-plus ms-2","data-type":"plus","data-field":"",onClick:function(){return Ze(null===e||void 0===e?void 0:e.varient_Id)},disabled:P[null===e||void 0===e?void 0:e.varient_Id]||(null===e||void 0===e?void 0:e.quantity)===(null===e||void 0===e?void 0:e.stockQuantity),children:P[null===e||void 0===e?void 0:e.varient_Id]?(0,k.jsx)(y.Z,{}):(0,k.jsx)("i",{className:"fa fa-plus ms-0","aria-hidden":"true"})})})]})]})})})})}),(0,k.jsxs)("td",{className:"subtotal",children:[(0,k.jsx)("h4",{className:"table-title text-content",children:"Total"}),(0,k.jsxs)("h5",{children:["$",null===e||void 0===e?void 0:e.Price]})]}),(0,k.jsxs)("td",{className:"save-remove",children:[(0,k.jsx)("h3",{className:"table-title text-content",style:{display:"flex",textAlign:"center",justifyContent:"center"},children:(0,k.jsx)("strong",{children:"Action"})}),(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[(0,k.jsx)("button",{className:"btn btn-animation proceed-btn fw-bold me-2",style:{height:"35px",width:"35px",cursor:z?"not-allowed":"pointer"},onClick:function(s){z||Ie(s,e)},children:"Buy"}),(0,k.jsx)(o.rU,{to:"#",className:"btn btn-animation proceed-btn fw-bold",style:{height:"35px",width:"35px"},title4:"Wishlist",onClick:function(){return Ce(null===e||void 0===e?void 0:e.cart_Id)},children:(0,k.jsx)(u.G,{icon:j.$aW})})]})]})]},s)}))})})})}):(0,k.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[(0,k.jsx)("img",{src:"../assets/images/emptycart.webp",className:"img-fluid  lazyload ",alt:"",height:500,width:500}),(0,k.jsx)("div",{className:"d-flex align-items-center justify-content-center mt-3",children:(0,k.jsx)("h2",{children:(0,k.jsx)("strong",{children:"Your Cart Is Empty"})})}),(0,k.jsx)(o.rU,{to:"/shop",className:" btn btn-animation proceed-btn fw-bold d-flex align-items-center justify-content-center mt-3",children:"Shop Now"})]})}),(0,k.jsxs)("div",{className:"button-group cart-button d-flex justify-content-between",style:{display:(null===oe||void 0===oe?void 0:oe.length)>0?"":"none"},children:[(0,k.jsxs)("button",{onClick:function(e){fe("/shop")},className:"btn btn-light shopping-button text-dark w-25 mt-3",style:{backgroundColor:"#f8f9fa",height:"50px"},children:[(0,k.jsx)("i",{className:"fa-solid fa-arrow-left-long me-2"}),"Return To Shopping"]}),(0,k.jsx)("button",{className:"btn btn-animation proceed-btn fw-bold mt-3 w-25",onClick:function(e){return Ie(e)},children:S?(0,k.jsx)(y.Z,{}):(0,k.jsxs)("span",{children:["Process To Checkout",(0,k.jsx)("i",{className:"fa-solid fa-arrow-right-long ms-2"})]})})]})]})})}),(0,k.jsx)(p.Z,{}),(0,k.jsx)(N.Z,{}),(0,k.jsx)(f.Z,{}),(0,k.jsx)("div",{className:"bg-overlay"})]})}},4209:function(e,s,l){l(2791);var a=l(1087),n=l(184);s.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"modal fade theme-modal deal-modal",id:"deal-box",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,n.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-fullscreen-sm-down",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h5",{className:"modal-title w-100",id:"deal_today",children:"Deal Today"}),(0,n.jsx)("p",{className:"mt-1 text-content",children:"Recommended deals for you."})]}),(0,n.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",children:(0,n.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,n.jsx)("div",{className:"modal-body",children:(0,n.jsx)("div",{className:"deal-offer-box",children:(0,n.jsxs)("ul",{className:"deal-offer-list",children:[(0,n.jsx)("li",{className:"list-1",children:(0,n.jsxs)("div",{className:"deal-offer-contain",children:[(0,n.jsx)(a.rU,{to:"/shop",className:"deal-image",children:(0,n.jsx)("img",{src:"../assets/images/vegetable/product/10.png",className:" lazyload",alt:""})}),(0,n.jsxs)(a.rU,{to:"/shop",className:"deal-contain",children:[(0,n.jsx)("h5",{children:"Blended Instant Coffee 50 g Buy 1 Get 1 Free"}),(0,n.jsxs)("h6",{children:["$52.57 ",(0,n.jsx)("del",{children:"57.62"})," ",(0,n.jsx)("span",{children:"500 G"})]})]})]})}),(0,n.jsx)("li",{className:"list-2",children:(0,n.jsxs)("div",{className:"deal-offer-contain",children:[(0,n.jsx)(a.rU,{to:"/shop",className:"deal-image",children:(0,n.jsx)("img",{src:"../assets/images/vegetable/product/11.png",className:" lazyload",alt:""})}),(0,n.jsxs)(a.rU,{to:"/shop",className:"deal-contain",children:[(0,n.jsx)("h5",{children:"Blended Instant Coffee 50 g Buy 1 Get 1 Free"}),(0,n.jsxs)("h6",{children:["$52.57 ",(0,n.jsx)("del",{children:"57.62"})," ",(0,n.jsx)("span",{children:"500 G"})]})]})]})}),(0,n.jsx)("li",{className:"list-3",children:(0,n.jsxs)("div",{className:"deal-offer-contain",children:[(0,n.jsx)(a.rU,{to:"/shop",className:"deal-image",children:(0,n.jsx)("img",{src:"../assets/images/vegetable/product/12.png",className:" lazyload",alt:""})}),(0,n.jsxs)(a.rU,{to:"/shop",className:"deal-contain",children:[(0,n.jsx)("h5",{children:"Blended Instant Coffee 50 g Buy 1 Get 1 Free"}),(0,n.jsxs)("h6",{children:["$52.57 ",(0,n.jsx)("del",{children:"57.62"})," ",(0,n.jsx)("span",{children:"500 G"})]})]})]})}),(0,n.jsx)("li",{className:"list-1",children:(0,n.jsxs)("div",{className:"deal-offer-contain",children:[(0,n.jsx)(a.rU,{to:"/shop",className:"deal-image",children:(0,n.jsx)("img",{src:"../assets/images/vegetable/product/13.png",className:" lazyload",alt:""})}),(0,n.jsxs)(a.rU,{to:"/shop",className:"deal-contain",children:[(0,n.jsx)("h5",{children:"Blended Instant Coffee 50 g Buy 1 Get 1 Free"}),(0,n.jsxs)("h6",{children:["$52.57 ",(0,n.jsx)("del",{children:"57.62"})," ",(0,n.jsx)("span",{children:"500 G"})]})]})]})})]})})})]})})})})}},8859:function(e,s,l){var a=l(9439),n=l(2791),i=l(1087),t=l(7339),c=l(5048),r=l(184);s.Z=function(){var e=(0,c.v9)((function(e){var s;return null===e||void 0===e||null===(s=e.local)||void 0===s?void 0:s.ecomWebtoken})),s=((0,c.v9)((function(e){var s;return null===e||void 0===e||null===(s=e.local)||void 0===s?void 0:s.ecomUserid})),(0,t.j2)()),l=(0,t.Q0)(),d=((0,a.Z)(l,1)[0],(0,n.useState)([])),o=(0,a.Z)(d,2),h=(o[0],o[1],(0,n.useState)([])),m=(0,a.Z)(h,2),x=m[0],u=m[1];return(0,n.useEffect)((function(){var e,l,a,n,i=null!==(e=null===s||void 0===s||null===(l=s.data)||void 0===l||null===(a=l.results)||void 0===a||null===(n=a.list)||void 0===n?void 0:n.slice().reverse())&&void 0!==e?e:[];u(i)}),[s]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("footer",{className:"section-t-space",children:(0,r.jsxs)("div",{className:"container-fluid-lg",children:[(0,r.jsx)("div",{className:"service-section",children:(0,r.jsx)("div",{className:"row g-3",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"service-contain",children:[(0,r.jsxs)("div",{className:"service-box",children:[(0,r.jsx)("div",{className:"service-image",children:(0,r.jsx)("img",{src:"../../assets/svg/product.svg",className:" lazyload",alt:""})}),(0,r.jsx)("div",{className:"service-detail",children:(0,r.jsx)("h5",{children:"Every Fresh Products"})})]}),(0,r.jsxs)("div",{className:"service-box",children:[(0,r.jsx)("div",{className:"service-image",children:(0,r.jsx)("img",{src:"../../assets/svg/delivery.svg",className:" lazyload",alt:""})}),(0,r.jsx)("div",{className:"service-detail",children:(0,r.jsx)("h5",{children:"Free Delivery For Order Over $50"})})]}),(0,r.jsxs)("div",{className:"service-box",children:[(0,r.jsx)("div",{className:"service-image",children:(0,r.jsx)("img",{src:"../../assets/svg/discount.svg",className:" lazyload",alt:""})}),(0,r.jsx)("div",{className:"service-detail",children:(0,r.jsx)("h5",{children:"Daily Mega Discounts"})})]}),(0,r.jsxs)("div",{className:"service-box",children:[(0,r.jsx)("div",{className:"service-image",children:(0,r.jsx)("img",{src:"../../assets/svg/market.svg",className:" lazyload",alt:""})}),(0,r.jsx)("div",{className:"service-detail",children:(0,r.jsx)("h5",{children:"Best Price On The Market"})})]})]})})})}),(0,r.jsx)("div",{className:"main-footer section-b-space section-t-space",children:(0,r.jsxs)("div",{className:"row g-md-4 g-3",children:[(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-sm-6",children:(0,r.jsxs)("div",{className:"footer-logo",children:[(0,r.jsx)("div",{className:"theme-logo",children:(0,r.jsx)(i.rU,{to:"/index",children:(0,r.jsx)("img",{src:"../../assets/images/logo/logo.png",className:" lazyload",alt:""})})}),(0,r.jsxs)("div",{className:"footer-logo-contain",children:[(0,r.jsx)("p",{children:"We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a perfect place for a couple."}),(0,r.jsxs)("ul",{className:"address",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{"data-feather":"home"}),(0,r.jsx)(i.rU,{to:"#",children:"1418 Riverwood Drive, CA 96052, US"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{"data-feather":"mail"}),(0,r.jsx)(i.rU,{to:"#",children:"support@dummy.com"})]})]})]})]})}),(0,r.jsxs)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-6",children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h4",{children:"Categories"})}),(0,r.jsx)("div",{className:"footer-contain",children:(0,r.jsx)("ul",{children:null===x||void 0===x?void 0:x.map((function(e,s){return(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"/shop/:id",className:"text-content",children:null===e||void 0===e?void 0:e.categoryName_en})},s)}))})})]}),(0,r.jsxs)("div",{className:"col-xl col-lg-2 col-sm-3",children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h4",{children:"Useful Links"})}),(0,r.jsx)("div",{className:"footer-contain",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"/indexgrocery",className:"text-content",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"/shop",className:"text-content",children:"Shop"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"/about-us",className:"text-content",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"/blog",className:"text-content",children:"Blog"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"/contact-us",className:"text-content",children:"Contact Us"})})]})})]}),(0,r.jsxs)("div",{className:"col-xl-2 col-sm-3",children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h4",{children:"Help Center"})}),(0,r.jsx)("div",{className:"footer-contain",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{style:{display:e?"":"none"},children:(0,r.jsx)(i.rU,{to:"/order-success",className:"text-content",children:"Your Order"})}),(0,r.jsx)("li",{style:{display:e?"":"none"},children:(0,r.jsx)(i.rU,{to:"/user-dashboard",className:"text-content",children:"Your Account"})}),(0,r.jsx)("li",{style:{display:e?"":"none"},children:(0,r.jsx)(i.rU,{to:"/order-success",className:"text-content",children:"Track Order"})}),(0,r.jsx)("li",{style:{display:e?"":"none"},children:(0,r.jsx)(i.rU,{to:"/wishlist",className:"text-content",children:"Your Wishlist"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"/shop",className:"text-content",children:"Search"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"/faq",className:"text-content",children:"FAQ"})})]})})]}),(0,r.jsxs)("div",{className:"col-xl-3 col-lg-4 col-sm-6",children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h4",{children:"Contact Us"})}),(0,r.jsx)("div",{className:"footer-contact",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"footer-number",children:[(0,r.jsx)("i",{"data-feather":"phone"}),(0,r.jsxs)("div",{className:"contact-number",children:[(0,r.jsx)("h6",{className:"text-content",children:"Hotline 24/7 :"}),(0,r.jsx)(i.rU,{to:"tel:+918881042340",children:(0,r.jsx)("h5",{children:"+91 888 104 2340"})})]})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"footer-number",children:[(0,r.jsx)("i",{"data-feather":"mail"}),(0,r.jsxs)("div",{className:"contact-number",children:[(0,r.jsx)("h6",{className:"text-content",children:"Email Address :"}),(0,r.jsx)(i.rU,{to:"mailto:dummy@hotmail.com",children:(0,r.jsx)("h5",{children:"dummy@hotmail.com"})})]})]})}),(0,r.jsxs)("li",{className:"social-app mb-0",children:[(0,r.jsx)("h5",{className:"mb-2 text-content",children:"Download App :"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"mb-0",children:(0,r.jsx)(i.rU,{to:"https://play.google.com/store/apps",target:"_blank",children:(0,r.jsx)("img",{src:"../../assets/images/playstore.svg",className:" lazyload",alt:""})})}),(0,r.jsx)("li",{className:"mb-0",children:(0,r.jsx)(i.rU,{to:"https://www.apple.com/in/app-store/",target:"_blank",children:(0,r.jsx)("img",{src:"../../assets/images/appstore.svg",className:" lazyload",alt:""})})})]})]})]})})]})]})}),(0,r.jsxs)("div",{className:"sub-footer section-small-space",children:[(0,r.jsx)("div",{className:"reserve",children:(0,r.jsx)("h6",{className:"text-content",children:"2023 Copyright By TechGropse eCommerce"})}),(0,r.jsx)("div",{className:"payment",children:(0,r.jsx)("img",{src:"../../assets/images/payment/1.png",className:" lazyload",alt:""})}),(0,r.jsxs)("div",{className:"social-link",children:[(0,r.jsx)("h6",{className:"text-content",children:"Stay connected :"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"https://www.facebook.com/",target:"_blank",children:(0,r.jsx)("i",{className:"fa-brands fa-facebook-f"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"https://twitter.com/",target:"_blank",children:(0,r.jsx)("i",{className:"fa-brands fa-twitter"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"https://www.instagram.com/",target:"_blank",children:(0,r.jsx)("i",{className:"fa-brands fa-instagram"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.rU,{to:"https://in.pinterest.com/",target:"_blank",children:(0,r.jsx)("i",{className:"fa-brands fa-pinterest-p"})})})]})]})]})]})})})}},7242:function(e,s,l){l(2791);var a=l(1087),n=l(184);s.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"theme-option",children:[(0,n.jsxs)("div",{className:"setting-box",children:[(0,n.jsx)("button",{className:"btn setting-button",children:(0,n.jsx)("i",{className:"fa-solid fa-gear"})}),(0,n.jsx)("div",{className:"theme-setting-2",children:(0,n.jsx)("div",{className:"theme-box",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("div",{className:"setting-name",children:(0,n.jsx)("h4",{children:"Color"})}),(0,n.jsx)("div",{className:"theme-setting-button color-picker",children:(0,n.jsxs)("form",{className:"form-control",children:[(0,n.jsx)("label",{htmlFor:"colorPick",className:"form-label mb-0",children:"Theme Color"}),(0,n.jsx)("input",{type:"color",className:"form-control form-control-color",id:"colorPick",defaultValue:"#0da487",title:"Choose your color"})]})})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("div",{className:"setting-name",children:(0,n.jsx)("h4",{children:"Dark"})}),(0,n.jsxs)("div",{className:"theme-setting-button",children:[(0,n.jsx)("button",{className:"btn btn-2 outline",id:"darkButton",children:"Dark"}),(0,n.jsx)("button",{className:"btn btn-2 unline",id:"lightButton",children:"Light"})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("div",{className:"setting-name",children:(0,n.jsx)("h4",{children:"RTL"})}),(0,n.jsxs)("div",{className:"theme-setting-button rtl",children:[(0,n.jsx)("button",{className:"btn btn-2 rtl-unline",children:"LTR"}),(0,n.jsx)("button",{className:"btn btn-2 rtl-outline",children:"RTL"})]})]})]})})})]}),(0,n.jsx)("div",{className:"back-to-top",children:(0,n.jsx)(a.rU,{id:"back-to-top",to:"#",children:(0,n.jsx)("i",{className:"fas fa-chevron-up"})})})]})})}}}]);
//# sourceMappingURL=4136.9ed69840.chunk.js.map