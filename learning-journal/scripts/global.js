import { loadContent } from "./dynamicLoader.js";

document.addEventListener("DOMContentLoaded", () => {
  // Load the main content dynamically
  loadContent("#main-content");
});
