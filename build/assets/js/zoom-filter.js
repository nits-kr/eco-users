/**=====================
     zoom js
==========================**/
//  if ($(window).width() > 991) {
//      $('.product-main').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//          var img_url_temp = $(this).find('img').attr('src');
//          var imgs = $('.image_zoom_cls');
//          $('.zoomContainer').remove();
//          imgs.removeData('elevateZoom');
//          imgs.removeData('zoomImage');
//          var temp_zoom_cls = '.image_zoom_cls-' + currentSlide;
//          setTimeout(function () {
//              $(temp_zoom_cls).elevateZoom({
//                  zoomType: "inner",
//                  cursor: "crosshair"
//              });
//          }, 200);
//      });
//  }
//  if ($(window).width() > 991) {
//      setTimeout(function () {
//          $('.product-main img').elevateZoom({
//              zoomType: "inner",
//              cursor: "crosshair"
//          });
//      }, 100);
//  }

if (window.width() > 991) {
  document
    .getElementByClassName("product-main")
    .addEventListener(
      "afterChange",
      (event, slick, currentSlide, nextSlide) => {
        let img_url_temp = this.find("img").attr("src");
        let imgs = document.getElementByClassName("image_zoom_cls");
        let zoomContainer = document.getElementByClassName("zoomContainer");
        zoomContainer.parentNode.removeChild(zoomContainer);
        imgs.removeData("elevateZoom");
        imgs.removeData("zoomImage");
        let temp_zoom_cls = ".image_zoom_cls-" + currentSlide;
        setTimeout(function () {
          temp_zoom_cls.elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
          });
        }, 200);
      }
    );
}
if (window.width() > 991) {
  setTimeout(function () {
    document.querySelectorAll(".product-main img").elevateZoom({
      zoomType: "inner",
      cursor: "crosshair",
    });
  }, 100);
}
