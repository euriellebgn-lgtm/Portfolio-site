# Portfolio-site
Personal Portfolio : Eurielle Bognon
A showcase of my journey as a PEIP student majoring in computer engineering and learning development on my own before starting my apprenticeship. This project serves as a central hub for all my development work, ranging from web applications to Python-based logic games.

Tech Stack
Frontend: HTML5, CSS3 , JavaScript.

Backend & Databases: PHP, MySQL.

Other Languages: Python (Game logic and automation).

Features: Dynamic Light/Dark Mode, Asynchronous Modal Windows, Responsive Design.

 Key Features
-Dynamic Theme Switching

-Interactive Project Gallery
Rather than just static images, this portfolio features an Integrated Modal System:

Dynamic Loading: Clicking a project card opens a modal that pulls data (Video IDs and GitHub links) directly from data-attributes in the HTML.

Video Integration: Embeds YouTube demonstrations directly in the UI for instant project previews.

-Responsive Architecture
Ensures that project cards and navigation elements adapt seamlessly from high-resolution monitors to mobile screens.

Featured Projects
This portfolio acts as a gateway to my specialized work, including:

-Task Manager: A JavaScript-driven productivity tool.

-Movie Finder: Real-time data fetching using the TMDb API.

-Python Games: Logic-based projects including Snake and Tic-Tac-Toe.

-Secure Login Page: A PHP/MySQL implementation for user authentication and a quiz app for students to create class flashcards.

Coding process: 
Instead of creating seven different HTML files for seven projects, I wrote a single JavaScript function that "scrapes" the data from the card you clicked.
JavaScript
// Example of the logic used
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const videoUrl = card.getAttribute('data-video');
        // Logic to update iframe src and show modal
    });
});
Upcoming Improvements:
-Project Filtering: Add buttons to filter projects by language (e.g., "Show only Python").

-Contact Form: Implement a PHP-based backend contact form with validation.

-Animations: Add ScrollReveal.js for smoother entry animations.

Contact Me:
Email: euriellebognon@outlook.fr

LinkedIn: linkedin.com/in/eurielle-bognon
