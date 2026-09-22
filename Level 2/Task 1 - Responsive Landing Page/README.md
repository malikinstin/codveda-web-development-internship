# Wraak Nomad — Landing Page

A single-page promotional website for **Wraak Nomad**, a 2D metroidvania action-adventure game. Built with semantic HTML5, modern CSS (custom properties, CSS Grid), and vanilla JavaScript.

> Built as a Codveda internship project.

## Overview

Zan'zol is the last survivor of a tribe capable of bending Ascadium — the living mineral powering an entire artificial planet. This landing page introduces the game's world, core abilities, and media, and drives visitors toward wishlisting the title.

## Features

- **Responsive navigation** with a hamburger menu that toggles on mobile (`script.js`)
- **Hero section** with character artwork, tagline, and primary/secondary CTAs (Wishlist / Watch Trailer)
- **World section** introducing the Osiris Galaxy and the Veiled Architects
- **Gameplay section** showcasing four core abilities (Shape, Forge, Manipulate, Breach) in a card grid
- **Media section** with a screenshot gallery and a trailer preview overlay
- **Fully responsive layout** with a dedicated breakpoint at `768px` for mobile devices

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Flexbox, Grid, `clamp()` for fluid type) |
| Interactivity | Vanilla JavaScript (no dependencies/frameworks) |

## Project Structure

```
/Task 1 - Responsive Landing Page
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── Zanzol-hero.png          #Hero section background + trailer preview image
    ├── world-visual.jpg         # World section visual
    ├── zanzol-screenshot.png    # Gameplay screenshot 1
    └── zanzol-screenshot1.png   # Gameplay screenshot 2
└── assets/
    └── desktop.png
    └── mobile.png
```

## Getting Started

1. Clone or download this repository.
2. Open `index.html` directly in a browser — no build step or server required.

## Browser Support

Works in all modern evergreen browsers (Chrome, Firefox, Edge, Safari). Uses CSS Grid, custom properties, and `clamp()`, so it is not intended to support Internet Explorer.

## Responsive Design

| Breakpoint | Behavior |
|---|---|
| `> 768px` | Full desktop layout: two-column hero/world sections, 2-column ability & screenshot grids |
| `≤ 768px` | Single-column stacked layout; nav collapses into a hamburger-triggered dropdown menu |

## What I Learned

- How to structure a landing page using semantic HTML.
- How to combine CSS Grid and Flexbox for responsive layouts.
- How to use CSS custom properties to manage colors and spacing.
- How to use media queries to adapt layouts for different screen sizes.
- How to use JavaScript event listeners and DOM manipulation to create a mobile navigation menu.
- How to test a responsive website across desktop, tablet, and mobile screen sizes.

## Credits

- **Game concept & narrative:** Fredrick Sika
- **Development:** Fredrick Sika, as part of a Codveda internship project

## License

This project was created for educational and internship purposes as part of the Codveda Web Development Internship.
