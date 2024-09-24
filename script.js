// Check if we're on the cart page (where the "Add to Cart" button exists)
const addToCartButton = document.getElementById('addToCartButton');

if (addToCartButton) {
    // Add a click event listener to the button
    addToCartButton.addEventListener('click', function() {
        const itemPrice = 50; // Example price to be added to the cart

        // Store the total price in localStorage so we can access it later
        localStorage.setItem('totalPrice', itemPrice);

        // Redirect the user to the checkout page after adding the item to the cart
        window.location.href = 'checkout.html';
    });
}

// Check if we're on the checkout page (where the total price should be displayed)
const totalPriceElement = document.getElementById('totalPrice');

if (totalPriceElement) {
    // Retrieve the total price from localStorage
    const storedPrice = localStorage.getItem('totalPrice');

    // Display the price on the confirmation/checkout page
    totalPriceElement.textContent = storedPrice ? `$${storedPrice}` : 'No items in cart';
}
