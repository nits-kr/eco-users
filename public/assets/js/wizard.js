/**=====================
     Wizard js
==========================**/
//  $(document).ready(function () {
//      // hidden things
//      $(".form-business").hide();
//      // next button
//      $(".proceed-btn").on({
//          click: function () {
//              $("#myTab").find(".active").parent().next().find('.nav-link').addClass("active");
//              $(this).parents(".tab-pane").fadeOut("slow", function () {
//                  $(this).next(".tab-pane").fadeIn("slow");
//              });
//          }
//      });
//      // back button
//      $(".backward-btn").on({
//          click: function () {
//              $("#myTab .active").parent().last().find('.nav-link').removeClass("active");
//              $(this).parents(".tab-pane").fadeOut("slow", function () {
//                  $(this).prev(".tab-pane").fadeIn("slow");
//              });
//          }
//      });
//  });

document.ready(function () {
  document.getElementByClassName("form-business").style.display = "none";

  document.getElementByClassName("proceed-btn").on({
    click: function () {
      document
        .getElementById("myTab")
        .find(".active")
        .parent()
        .nextElementSibling.find(".nav-link")
        .classList.add("active");
      this.parents(".tab-pane").fadeOut("slow", function () {
        this.next(".tab-pane").fadeIn("slow");
      });
    },
  });

  document.getElementByClassName("backward-btn").on({
    click: function () {
      $("#myTab .active")
        .parent()
        .last()
        .find(".nav-link")
        .classList.remove("active");
      this.parents(".tab-pane").fadeOut("slow", function () {
        this.prev(".tab-pane").fadeIn("slow");
      });
    },
  });
});
