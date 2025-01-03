import menuArray from "./data.js";

const menuWrapper = document.getElementById("menu-wrapper");
const pageDivider = `<div class="border-bottom"></div>`;

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
        <button class="item-add">+</button>
      </div>`;
  })
  .join(pageDivider);
