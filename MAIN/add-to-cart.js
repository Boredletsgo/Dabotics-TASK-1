function displayCart() {
    const cartItemsElement = document.getElementById("cartItems");
    const totalSection = document.getElementById("totalSection");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsElement.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
        const { id, image, title, price } = item;
        total += price;
        cartItemsElement.innerHTML += `
            <div class="cart-item">
                <div class="row-img">
                    <img class="rowing" src="${image}" alt="${title}">
                </div>
                <div class="item-details">
                    <p style="font-size: 12px;">${title}</p>
                    <h2 style="font-size: 15px;">₹ ${price.toFixed(2)}</h2>
                    <i class="fa-solid fa-trash" onclick="removeFromCart(${id})"></i>
                </div>
            </div>
        `;
    });
    totalSection.innerHTML = `<h3>Total: ₹ ${total.toFixed(2)}</h3>`;
}
displayCart();
