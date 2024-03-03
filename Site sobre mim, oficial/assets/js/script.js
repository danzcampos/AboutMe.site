document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById("toggle-button");
  const pmain = document.querySelector(".Pmain");

  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("expanded");
    pmain.classList.toggle("expanded");
  });
});