// $(".compare-table").on("click", ".remove_column", function (event) {
//     var ndx = $(this).parent().index() + 1;
//     $("td , th", event.delegateTarget).remove(":nth-child(" + ndx + ")");
// });

document
  .querySelector(".compare-table")
  .on("click", ".remove_column", function (event) {
    var ndx = document.querySelector(this).parent().index() + 1;
    document
      .querySelector("td , th", event.delegateTarget)
      .remove(":nth-child(" + ndx + ")");
  });
