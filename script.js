const addToCartButtons = document.querySelectorAll(".add-to-cart");

let cartCount = 0;
let cartTotalAmount = 0;

const cartDisplay = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const clearCartButton = document.querySelector("#clear-cart");
const checkoutButton = document.querySelector("#checkout");

const contactForm = document.querySelector("form");
const contactMessage = document.querySelector("#contact-message");

addToCartButtons.forEach(function (button) {
  const product = button.closest(".product");
  const message = product.querySelector("p[id^='message']");
  const productName = product.querySelector("h3").textContent;
  const productPrice = product.querySelector(".price").textContent;

  button.addEventListener("click", function () {
    if (message.textContent === "") {
      message.textContent = "Thanks for your interest in this product!";
      button.textContent = "Added!";

      cartCount++;
      cartDisplay.textContent = cartCount;

      cartTotalAmount += parseFloat(productPrice.replace("€", ""));
      cartTotal.textContent = cartTotalAmount.toFixed(2);

      const item = document.createElement("p");
      item.dataset.product = productName;
      item.textContent = productName + " - " + productPrice;

      cartItems.appendChild(item);
    } else {
      message.textContent = "";
      button.textContent = "Add to Cart";

      cartCount--;
      cartDisplay.textContent = cartCount;

      cartTotalAmount -= parseFloat(productPrice.replace("€", ""));
      cartTotal.textContent = cartTotalAmount.toFixed(2);

      const item = cartItems.querySelector(`p[data-product="${productName}"]`);

      if (item) {
        item.remove();
      }
    }
  });
});

const viewDetailsButton = document.querySelector(".view-details");
const productDetails = document.querySelector(".product-details");

viewDetailsButton.addEventListener("click", function () {
  productDetails.classList.toggle("show");

  if (productDetails.classList.contains("show")) {
    viewDetailsButton.textContent = "Hide Details";
  } else {
    viewDetailsButton.textContent = "View Details";
  }
});

clearCartButton.addEventListener("click", function () {
  cartCount = 0;
  cartTotalAmount = 0;

  cartDisplay.textContent = cartCount;
  cartTotal.textContent = cartTotalAmount.toFixed(2);

  cartItems.innerHTML = "";

  addToCartButtons.forEach(function (button) {
    const product = button.closest(".product");
    const message = product.querySelector("p[id^='message']");

    button.textContent = "Add to Cart";
    message.textContent = "";
  });
});

checkoutButton.addEventListener("click", function () {
  if (cartCount === 0) {
    alert("Your cart is empty. Please add a product first.");
  } else {
    alert("Checkout is being connected. Please check back soon.");
  }
});
