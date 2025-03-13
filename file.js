document.addEventListener("DOMContentLoaded", function () {
    let cartCount = document.getElementById("cart-count");
    let addToCartButtons = document.querySelectorAll(".cart-btn");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            let currentCount = parseInt(cartCount.textContent, 10);
            currentCount++;
            cartCount.textContent = currentCount;

            // Make the cart count visible when > 0
            if (currentCount > 0) {
                cartCount.style.display = "inline-block";
            }
        });
    });
});
