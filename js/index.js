const header = document.querySelector("header");
const locationMark = document.querySelector("#location-mark");

const drawerWrapper = document.querySelector("#drawer-wrapper");
const drawer = document.querySelector("aside");

const dropDownMenu = document.querySelector(".drop-container");

const locationHeader = document.getElementById("location-header");

window.addEventListener("scroll", (e) => {
  header.classList.toggle("light-header", window.scrollY !== 0);
  locationMark.classList.toggle(
    "location-selection-visible",
    window.scrollY > window.innerHeight / 2
  );
  // locationHeader.classList.toggle("on-visible", window.scrollY > 222);

  if (window.scrollY > 222) {
    locationHeader.style.opacity = 1;
    locationHeader.style.zIndex = 999;
  } else {
    locationHeader.style.opacity = 0;
    locationHeader.style.zIndex = -999;
  }
  console.log(window.scrollY);
});

function openDrawer() {
  drawerWrapper.classList.toggle("open");
  drawer.classList.toggle("open");
  document.body.classList.toggle("disable-scroll");
}

function closeDrawer() {
  drawerWrapper.classList.remove("open");
  drawer.classList.remove("open");
  document.body.classList.remove("disable-scroll");
}

function openDropDown() {
  dropDownMenu.classList.toggle("open");
}
