let cart = [];

// function addToCart(item) {
//     cart.push(item);
//     displayCart();
//     localStorage.setItem('cart', JSON.stringify(cart));
// }




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
};

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
};

function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.innerText = `總金額: $${total}`;
    }
};

function clearCart() {
    cart = [];
    displayCart();
};



function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(cartItem => cartItem.name === item.name && cartItem.color === item.color && cartItem.size ===item.size);
  
    if (existingItem) {
      existingItem.quantity=parseInt(existingItem.quantity)+ parseInt(item.quantity) ; // 更新數量
      existingItem.price = parseInt(item.price) * existingItem.quantity;
    } else {
        item.price = parseFloat(item.price) * item.quantity;
      cart.push(item); // 新增商品
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // 更新購物車筆數
  };


 