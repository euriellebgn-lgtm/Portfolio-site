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


// Get modal elements
const modal = document.getElementById("project-modal");
const modalVideo = document.getElementById("modal-video");
const modalGithub = document.getElementById("modal-github");
const closeBtn = document.querySelector(".close");

// Attach click event to all cards
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const videoSrc = card.getAttribute("data-video");
    const githubLink = card.getAttribute("data-github");

    modalVideo.src = videoSrc;
    modalGithub.href = githubLink;

    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
});

// Close if click outside content
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
});
