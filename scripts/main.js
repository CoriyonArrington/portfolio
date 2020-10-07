// this hides and shows the nav
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

let scrollPos = 5;
let scrollTimer = -5;
const img = new Image();

// this hides and shows the nav bar while scrolling
function checkPosition() {
  let windowY = window.pageYOffset;
  let mainNav = document.getElementById("main-nav");

  img.src = "../images/about-me.png";
  if (windowY <= scrollPos) {
    // Scrolling UP
    mainNav.classList.add("is-visible");
    mainNav.classList.remove("is-hidden");
    img.onload = function () {
      if (windowY > 5) {
        mainNav.classList.add("is-filled");
        mainNav.classList.remove("is-transparent");
      } else {
        mainNav.classList.add("is-transparent");
        mainNav.classList.remove("is-filled");
      }
    };
  } else {
    // Scrolling DOWN
    mainNav.classList.add("is-hidden");
    mainNav.classList.remove("is-visible");
    mainNav.classList.remove("is-filled");
  }

  scrollPos = windowY;
}

window.addEventListener("scroll", debounce(checkPosition));
