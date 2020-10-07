let html = document.getElementById("html");
let contactMe = document.getElementById("contact-me");
let navOverlay = document.getElementById("nav-overlay");
let menuIcon = document.getElementById("menu-icon-container");
let projectNavOverlay = document.getElementById("project-nav-overlay");
let sortIcon = document.getElementById("sort-icon");
let mainNav = document.getElementById("main-nav");

// this closes the mobile nav menu after clicking an anchor link and restores overflow
function anchorLink() {
  menuIcon.classList.remove("change");
  navOverlay.classList.remove("on");
  projectNavOverlay.classList.remove("on");
  html.classList.remove("overflow-hidden");
}

// this opens and loses the project nav menu and prevents body scrolling
sortIcon.addEventListener("click", function () {
  let mainNavHidden = mainNav.classList.remove("is-hidden");
  let mainNavTransparent = mainNav.classList.toggle("is-transparent");

  if (mainNavHidden || mainNavTransparent !== true) {
    menuIcon.classList.toggle("change");
    projectNavOverlay.classList.add("on");
    html.classList.toggle("overflow-hidden");
  } else {
    // do nothing
  }
});

// this opens and loses the mobile nav menu and prevents body scrolling
menuIcon.addEventListener("click", function () {
  let menuIconClosed = menuIcon.classList.toggle("change");

  if (menuIconClosed === false) {
    menuIcon.classList.remove("change");
    projectNavOverlay.classList.remove("on");
    navOverlay.classList.remove("on");
    html.classList.remove("overflow-hidden");
  } else {
    navOverlay.classList.toggle("on");
    navOverlay.appendChild(contactMe);
    html.classList.toggle("overflow-hidden");
  }
});
