import './button.js';
// Select the product item container
const productItem = document.querySelector(".product-item");

// Create the button element
const moreButton = document.createElement("button");
moreButton.textContent = "More";
moreButton.href = "https://example.com/product-details"; // Replace with the actual link

// Insert the button before the closing </div> tag of the product item
productItem.insertBefore(moreButton, productItem.lastChild);