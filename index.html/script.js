let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert("Product added to cart!");
}

function subscribe(event) {
    event.preventDefault();

    alert("Thank you for subscribing!");

    event.target.reset();
}