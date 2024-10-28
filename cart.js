let cart = [];

// function addToCart(item) {
//     cart.push(item);
//     displayCart();
// }

function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart)); // 保存到 localStorage
}

function displayCart() {
    // 更新購物車顯示邏輯
    const cartDiv = document.getElementById('cart');
    if (cartDiv) {
        cartDiv.innerHTML = '';
        cart.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <span><img src="${item.image}" style="width:50px;"> ${item.name} ${item.color} ${item.size} ${item.price}</span>
                <button onclick="removeFromCart(${index})">刪除</button>`;
            cartDiv.appendChild(div);
        });
        updateTotal();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.innerText = `總金額: $${total}`;
    }
}

function clearCart() {
    cart = [];
    displayCart();
}


    