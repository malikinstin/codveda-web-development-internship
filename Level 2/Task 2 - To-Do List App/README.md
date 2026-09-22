# Plan the Day — To-Do

## Project Overview

Plan the Day — To-Do is a responsive task management web application that allows users to add, edit, complete, and delete daily tasks. The application uses JavaScript to manage tasks dynamically and `localStorage` to preserve tasks even after the browser is refreshed. It also includes a task counter, date display, empty-state message, and a feature for clearing completed tasks.

## Features

- Add new tasks
- Mark tasks as completed
- Edit existing tasks
- Delete individual tasks
- Clear all completed tasks
- Display the current date
- Display the number of remaining tasks
- Show an empty-state message when there are no tasks
- Persist tasks using browser localStorage
- Responsive layout for smaller screens

## Technologies Used

- HTML5 — Structure and semantic markup
- CSS3 — Styling, layout, responsiveness, and visual design
- JavaScript — Task management, DOM manipulation, and application logic
- localStorage — Persistent storage of tasks in the browser
- Google Fonts — Inter and Fraunces typography

## How to Run

1. Clone or download this repository.
2. Navigate to the `Level 2/Task 2 - To-Do List App/` folder.
3. Open `index.html` in a web browser.
4. Start adding and managing your tasks.

## Data Persistence

The application uses the browser's `localStorage` to save tasks. Tasks are converted to JSON before being stored and converted back into JavaScript objects when the application loads.

This allows tasks, including their completed status and edited text, to remain available after refreshing the page.

## What I Learned

Building this project helped me strengthen my understanding of:

- Selecting and manipulating HTML elements with JavaScript
- Handling form submissions and browser events
- Working with arrays and objects to manage application data
- Using `filter()` and `findIndex()` to work with task data
- Dynamically creating and removing DOM elements
- Managing task state with JavaScript
- Using `localStorage` with `JSON.stringify()` and `JSON.parse()`
- Using `forEach()` to process collections
- Creating responsive layouts with CSS
- Improving accessibility with descriptive button labels
- Debugging JavaScript by testing and inspecting values in the browser console

## Project Structure

```text
Task 2 - To-Do List App/
├── index.html
├── style.css
├── script.js
├── README.md
└── output/
    ├── desktop.png
    └── mobile.png