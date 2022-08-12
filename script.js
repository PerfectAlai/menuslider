const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// add EventListener to toggle button
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// add event listerner to open button
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// add event listener to close button
close.addEventListener("click", () => {
  modal.classList.remove('show-modal');
});

// close modal on window click
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove('show-modal');
  }
});
