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

  const contactForm = document.querySelector("#contact-form");
  const contactMessage = document.querySelector("#contact-message");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        contactForm.reset();
        contactMessage.textContent = "Thank you. Your message has been sent.";
      } else {
        contactMessage.textContent = "Something went wrong. Please try again.";
      }
    } catch (error) {
      contactMessage.textContent = "Something went wrong. Please try again.";
    }
  });
});
