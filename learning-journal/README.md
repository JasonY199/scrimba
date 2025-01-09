# My Learning Journal

This is a simple web project showcasing a learning journal, where blog-style posts can be displayed. The project uses vanilla JavaScript to dynamically load content and maintain a clean structure for reusability.

## Project Status

This project is **not complete and will not be continued for now**. While working on it, I encountered challenges with managing dynamic content and including pages without a backend or frameworks like React. These limitations led me to pause the project in anticipation of learning tools like React, Tailwind, and other modern technologies to simplify and enhance my workflow.

## First Mobile-First Attempt

This project was my first attempt at developing with a mobile-first approach, using CSS Grid for the main layout. I enjoyed the experience of breaking the project into multiple files for easier maintainability and leveraging Grid for responsive design. It was a valuable learning experience that I’m excited to build on in future projects.

## Features

- Dynamic Content Loading: The main content of the page (e.g., blog posts) is dynamically loaded using JavaScript.

- Modular CSS: CSS is organized into specific files for global styles, header, footer, and main content.

- Static Page Structure: A single index.html serves as the main entry point, with content for different pages dynamically injected.

## Project Structure

```
LEARNING-JOURNAL
  /images                  # Images used in the project
    article-image.png      # Placeholder for blog article image
    blog-image-01.png      # Blog-related image 1
    blog-image-02.png      # Blog-related image 2
    blog-image-03.png      # Blog-related image 3
    blog-image-04.png      # Blog-related image 4
    blog-image-05.png      # Blog-related image 5
    blog-image-06.png      # Blog-related image 6
    hero-image.png         # Hero section background image
    logo.png               # Site logo
    profile.png            # Profile picture placeholder
  /pages                   # Folder for dynamically loaded page content
    about-me.html          # About Me page content
    home.html              # Home page content
  /scripts                 # JavaScript files
    data.js                # Placeholder for additional data
    dynamicLoader.js       # Function to load content into the main element
    global.js              # Main script to load content dynamically
  /styles                  # CSS files
    footer.css             # Footer-specific styles
    global.css             # Global styles and resets
    header.css             # Header-specific styles
    main-content.css       # Main content styles
    variables.css          # CSS variables for colors and spacing
  index.html               # Main entry point of the application
  README.md                # Documentation for the project
```

## How It Works

- Dynamic Content Loading: The dynamicLoader.js script fetches and injects HTML content into the \<main> element of index.html. This keeps the header and footer consistent across pages while dynamically updating the main content.

- CSS Organization: Each section (header, footer, main) has its own dedicated CSS file to keep styles modular and maintainable.
