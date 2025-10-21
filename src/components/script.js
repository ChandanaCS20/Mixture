const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement; // <html> element
const storedTheme = localStorage.getItem("theme");

if (storedTheme) {
  // apply stored value
  root.setAttribute("data-theme", storedTheme);
} else {
  // optionally: check system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
