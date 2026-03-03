


const navMenu = document.querySelector(".nav-menu");


function mobileMenu() {
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}


const modalGithub = document.getElementById("modal-github");
const closeBtn = document.querySelector(".close");
const cards = document.querySelectorAll('.card');
const modalVideo = document.getElementById('modal-video');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const rawUrl = card.getAttribute('data-video');
    // Converts youtu.be/ID to youtube.com/embed/ID
    const videoId = rawUrl.split('/').pop();
    modalVideo.src = `https://www.youtube.com/embed/${videoId}`;

    const githubUrl = card.getAttribute('data-github');
    modalGithub.href = githubUrl;
    
    document.getElementById('project-modal').style.display = 'block';
  });
});

closeBtn.addEventListener("click", () => {
  const modal = document.getElementById('project-modal');
  modal.style.display = "none";
  
  // YouTube iframes don't support .pause() or .currentTime
  // Setting src to empty string is the best way to stop the video
  modalVideo.src = ""; 
});

// Close if click outside content
window.addEventListener("click", (e) => {
  const modal = document.getElementById('project-modal');
  if (e.target == modal) {
    modal.style.display = "none";
    modalVideo.src = "";
  }
});



const textElement = document.getElementById("typing-text");
const phrases = [
  "A computer engineering student",
  "A full-stack developer",
  "A problem solver",
  "An innovative coder",
  "I love turning ideas into useful projects."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    // Remove characters
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50; // Faster when deleting
  } else {
    // Add characters
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 150; // Natural typing speed
  }

  // If word is complete
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at the end of a phrase
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Move to next phrase
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

// Start the effect
document.addEventListener("DOMContentLoaded", typeEffect);


