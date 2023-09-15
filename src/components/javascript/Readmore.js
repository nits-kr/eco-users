// Create a function that sets up the "Read More" functionality
function SetupReadMore() {
  document.addEventListener("DOMContentLoaded", function () {
    const description = document.getElementById("productDescription");
    const readMoreButton = document.getElementById("readMoreButton");

    // Check if the description content exceeds 3 lines
    if (description.scrollHeight > description.clientHeight) {
      readMoreButton.style.display = "block";

      readMoreButton.addEventListener("click", function () {
        description.classList.toggle("expanded");
        if (description.classList.contains("expanded")) {
          description.style.maxHeight = null;
        } else {
          description.style.maxHeight = "3em";
        }
      });
    }
  });
}

// Export the function as the default export
export default SetupReadMore;
