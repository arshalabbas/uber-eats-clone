const header = document.querySelector("header");
const locationMark = document.querySelector("#location-mark");

window.addEventListener("scroll", (e) => {
  header.classList.toggle("light-header", window.scrollY !== 0);
  locationMark.classList.toggle(
    "location-selection-visible",
    window.scrollY > window.innerHeight / 2
  );
});
