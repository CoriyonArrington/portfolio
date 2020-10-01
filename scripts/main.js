// this opens and closes the mobile nav menu while preventing body scrolling
let menuItem = document.getElementsByClassName("menu-item");
let contactMe = document.getElementById("contact-me");
let mainNav = document.getElementById("main-nav");
let menuList = document.getElementById("menu-list");
let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");
let contact = document.getElementById("contact");
let html = document.getElementById("html");

var i;

function openMenu() {
  for (i = 0; i < menuItem.length; i++) {
    menuItem[i].style.display = "block";
  }

  mainNav.style.height = "100%";
  closeBtn.style.display = "flex";
  menuBtn.style.display = "none";
  mainNav.style.backgroundColor = "#000000";
  mainNav.style.gridTemplateRows = "80px 2fr 1fr";
  menuList.style.display = "block";
  mainNav.appendChild(contactMe);
  contactMe.style.display = "grid";
  contactMe.style.padding = "4%";
  contactMe.style.gridColumn = "1 / span 2";
  mainNav.style.transition = "0.4s ease-in";
  html.style.overflow = "hidden";
}

function closeMenu() {
  for (i = 0; i < menuItem.length; i++) {
    menuItem[i].style.display = "none";
  }

  mainNav.style.transition = "0.4s ease-out";
  mainNav.style.height = "80px";
  mainNav.style.alignItems = "center";
  mainNav.style.gridTemplateRows = "auto";
  closeBtn.style.display = "none";
  html.style.overflow = "visible";
  menuBtn.style.display = "flex";
  mainNav.removeChild(contactMe);
  menuList.style.display = "none";
}

// this allows the mobile menu anchor links to navigate properly
function anchorLink() {
  mainNav.style.transition = "0.4s ease-out";
  mainNav.style.height = "80px";
  mainNav.removeChild(contactMe);
  closeMenu();
}
