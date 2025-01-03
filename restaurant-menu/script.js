import menuArray from "./data.js";

const menuWrapper = document.getElementById("menu-wrapper");
const cartSection = document.getElementById("cart-section");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const pageDivider = `<div class="border-bottom"></div>`;
const cart = [];

// Render the menu items
menuWrapper.innerHTML = menuArray
  .map((menuItem) => {
    return `
      <div class="menu-item">
        <div class="item-img">${menuItem.emoji}</div>
        <div class="item-desc">
          <h2 class="item-name">${menuItem.name}</h2>
          <p class="item-ingredients">
            ${menuItem.ingredients.join(", ")}
          </p>
          <h3 class="item-price">$${menuItem.price}.00</h3>
        </div>
        <button class="item-add" data-add-id="${menuItem.id}">+</button>
      </div>`;
  })
  .join(pageDivider);

document.addEventListener("click", (event) => {
  if (event.target.dataset.addId) {
    addToCart(event.target.dataset.addId);
  } else if (event.target.id === "remove-cart-item") {
    removeCartItem(event.target.dataset.removeId);
  } else if (event.target.id === "complete-order-btn") {
    completeOrder();
  }
});

const addToCart = (id) => {
  const menuItem = menuArray.find((item) => item.id === parseInt(id));

  const existingCartItem = cart.find((cartItem) => cartItem.id === menuItem.id);

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cart.push({
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      quantity: 1,
    });
  }

  renderCart();
};

const removeCartItem = (id) => {
  const existingCartItem = cart.find(
    (cartItem) => cartItem.id === parseInt(id)
  );

  if (existingCartItem.quantity === 1) {
    cart.splice(cart.indexOf(existingCartItem), 1);
  } else {
    existingCartItem.quantity--;
  }

  renderCart();
};

const completeOrder = () => {
  // ! Continue functionality one day possibly
  alert("Order complete!");
  cart.length = 0;
  console.log(cart);
  renderCart();
};

const renderCart = () => {
  if (cart.length === 0) {
    if (!cartSection.classList.contains("hidden")) {
      cartSection.classList.add("hidden");
    }
    return;
  }

  if (cartSection.classList.contains("hidden")) {
    cartSection.classList.remove("hidden");
  }

  cartItems.innerHTML = cart
    .map((cartItem) => {
      return `
      <div class="cart-item">
        <h3 class="cart-item-name">${cartItem.name}</h3>
        <p class="cart-item-remove">
          <a href="#" id="remove-cart-item" data-remove-id="${
            cartItem.id
          }">remove</a>
        </p>
        <p class="cart-item-unit-price">$${cartItem.price} ea</p>
        <p class="cart-item-quantity">x ${cartItem.quantity}</p>
        <p class="cart-item-subtotal">$${cartItem.price * cartItem.quantity}</p>
      </div>`;
    })
    .join("");

  const total = cart.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);
  totalPrice.innerText = `$${total}.00`;
};
