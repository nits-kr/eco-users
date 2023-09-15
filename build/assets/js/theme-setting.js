/*=====================
      Color Picker
==========================*/
// var color_picker1 = document.getElementById("colorPick").value;
// document.getElementById("colorPick").onchange = function () {
//     color_picker1 = this.value;
//     document.body.style.setProperty("--theme-color", color_picker1);
//     document.body.style.setProperty("--theme-color-rgb", color_picker1);
// };

/*========================
 Dark setting js
 ==========================*/
// $("#darkButton").on("click", function () {
//     var href = $("#color-link").attr("href");
//     $("body").removeClass("light");
//     $("body").addClass("dark");
//     document
//         .getElementById("color-link")
//         .setAttribute("href", "../assets/css/dark.css");
// });

// $("#lightButton").on("click", function () {
//     var href = $("#color-link").attr("href");
//     $("body").removeClass("dark");
//     $("body").addClass("light");
//     document
//         .getElementById("color-link")
//         .setAttribute("href", "../assets/css/style.css");
//     console
// });
document.querySelector("#darkButton").on("click", function () {
  var href = document.querySelector("#color-link").attr("href");
  document.querySelector("body").removeClass("light");
  document.querySelector("body").addClass("dark");
  document
    .getElementById("color-link")
    .setAttribute("href", "../assets/css/dark.css");
});

document.querySelector("#lightButton").on("click", function () {
  var href = document.querySelector("#color-link").attr("href");
  document.querySelector("body").removeClass("dark");
  document.querySelector("body").addClass("light");
  document
    .getElementById("color-link")
    .setAttribute("href", "../assets/css/style.css");
  console;
});

/*========================
   RTL setting js
   ==========================*/
// $(".rtl").on("click", function () {
//     if ($("body").hasClass("ltr")) {
//         $("html").attr("dir", "rtl");
//         $("body").removeClass("ltr");
//         $("body").addClass("rtl");
//         $("#rtl-link").attr("href", "../assets/css/vendors/bootstrap.rtl.css");
//     } else {
//         $("html").attr("dir", "");
//         $("body").removeClass("rtl");
//         $("body").addClass("ltr");
//         $("#rtl-link").attr("href", "../assets/css/vendors/bootstrap.css");
//     }
// });

document.querySelector(".rtl").on("click", function () {
  if (document.querySelector("body").hasClass("ltr")) {
    document.querySelector("html").attr("dir", "rtl");
    document.querySelector("body").removeClass("ltr");
    document.querySelector("body").addClass("rtl");
    document
      .querySelector("#rtl-link")
      .attr("href", "../assets/css/vendors/bootstrap.rtl.css");
  } else {
    document.querySelector("html").attr("dir", "");
    document.querySelector("body").removeClass("rtl");
    document.querySelector("body").addClass("ltr");
    document
      .querySelector("#rtl-link")
      .attr("href", "../assets/css/vendors/bootstrap.css");
  }
});
