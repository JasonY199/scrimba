export function loadContent(
  targetSelector,
  pageFolder = "./pages",
  defaultPage = "home"
) {
  const targetElement = document.querySelector(targetSelector);

  const loadPage = (page) => {
    fetch(`${pageFolder}/${page}.html`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${page}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((html) => {
        targetElement.innerHTML = html;
      })
      .catch((error) => {
        targetElement.innerHTML = `<p>Error loading content. Please try again later.</p>`;
        console.error(error);
      });
  };

  // Determine the page to load
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get("page") || defaultPage;

  loadPage(page);
}
