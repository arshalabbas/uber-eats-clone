const header = document.querySelector("header");
const locationMark = document.querySelector("#location-mark");

const drawerWrapper = document.querySelector("#drawer-wrapper");
const drawer = document.querySelector("aside");

window.addEventListener("scroll", (e) => {
  header.classList.toggle("light-header", window.scrollY !== 0);
  locationMark.classList.toggle(
    "location-selection-visible",
    window.scrollY > window.innerHeight / 2
  );
  console.log(window.scrollY);
});

function openDrawer() {
  drawerWrapper.classList.toggle("open");
  drawer.classList.toggle("open");
}

function closeDrawer() {
  drawerWrapper.classList.remove("open");
  drawer.classList.remove("open");
}
