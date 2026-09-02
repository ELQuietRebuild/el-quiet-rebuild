const viewDetailsButtons = document.querySelectorAll(".view-details");

viewDetailsButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const product = button.closest(".product");
    const productDetails = product.querySelector(".product-details");

    productDetails.classList.toggle("show");

    if (productDetails.classList.contains("show")) {
      button.textContent = "Hide Details";
    } else {
      button.textContent = "View Details";
    }
  });
});
