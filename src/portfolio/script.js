const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const closeModal = document.getElementById("close-modal");
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";
  form.reset();
});
const projectDetails = {
  travel: {
    title: "Travel Guide App",
    description: "Built with React, uses APIs to show destinations and maps.",
  },
  // Add more projects here
};
document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.project;
    modalTitle.textContent = projectDetails[key].title;
    modalDesc.textContent = projectDetails[key].description;
    modal.classList.remove("hidden");
  });
});
document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  toggleBtn.title = "Switch to light mode";
} else {
  toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  toggleBtn.title = "Switch to dark mode";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");

  toggleBtn.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  toggleBtn.title = isDark ? "Switch to light mode" : "Switch to dark mode";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
