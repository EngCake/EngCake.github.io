// src/index.ts
var heading = document.querySelector("h1");
heading.addEventListener("click", () => {
  heading.textContent = "You clicked me!";
});
