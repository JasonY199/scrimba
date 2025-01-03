import menuArray from "./data.js";

const menuWrapper = document.getElementById("menu-wrapper");
const cartSection = document.getElementById("cart-section");
const cartWrapper = document.getElementById("cart-wrapper");
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
        <button class="item-add" data-id="${menuItem.id}">+</button>
      </div>`;
  })
  .join(pageDivider);

document.addEventListener("click", (event) => {
  if (event.target.dataset.id) {
    addToCart(event.target.dataset.id);
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

const renderCart = () => {
  if (cartSection.classList.contains("hidden")) {
    cartSection.classList.remove("hidden");
  }

  // TODO continue here
};
