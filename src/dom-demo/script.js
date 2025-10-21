const button = document.querySelector("#toggleBtn");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  if (message.style.display === "none") {
    message.style.display = "block";
    button.textContent = "Hide Message";
  } else {
    message.style.display = "none";
    button.textContent = "Show Message";
  }
});
