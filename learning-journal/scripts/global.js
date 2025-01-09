import { loadContent } from "./dynamicLoader.js";
import { BlogPosts } from "./data.js";

// Load the main content dynamically
document.addEventListener("DOMContentLoaded", () => {
  loadContent("#main-content");
});
