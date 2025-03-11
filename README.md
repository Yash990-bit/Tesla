# Interactive Web Components - Complete Implementation

This project includes a side menu, backdrop effect, and interactive "Learn More" buttons using HTML, CSS, and JavaScript. The layout is fully responsive, and JavaScript is used to control interactive elements like opening and closing the side menu, displaying a backdrop, and toggling content visibility.

## Table of Contents

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [Usage](#usage)
- [Conclusion](#conclusion)

## HTML

The HTML structure provides the basic layout for the page, including the menu button, side menu (`<aside>`), backdrop, content sections, and buttons for interaction.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Web Components</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <button id="menuBtn">Open Menu</button>

    <aside>
        <button class="close">X</button>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </aside>

    <div class="backdrop"></div>

    <section>
        <h1>Welcome to Tesla</h1>
        <p>Learn more about Tesla and its features.</p>
        <button class="learn-more-btn">Learn More</button>
        <div id="learnMoreText1" style="display:none;">
            <p>Tesla cars are electric vehicles designed for high performance and sustainability.</p>
        </div>
    </section>

    <div class="car">
        <a href="#" class="button">Join Tesla</a>
    </div>

    <script src="script.js"></script>
</body>
</html>
