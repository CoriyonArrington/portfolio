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

let scrollPos = 0;
let scrollTimer = -5;

function checkPosition() {
  let windowY = window.pageYOffset;
  if (windowY <= scrollPos) {
    // Scrolling UP
    mainNav.classList.add("is-visible");
    mainNav.classList.remove("is-hidden");
    mainNav.classList.add("filled");
    mainNav.classList.remove("transparent");
  } else {
    // Scrolling DOWN
    mainNav.classList.add("is-hidden");
    mainNav.classList.remove("is-visible");
    mainNav.classList.add("transparent");
    mainNav.classList.remove("filled");
  }

  scrollPos = windowY;
}

window.addEventListener("scroll", debounce(checkPosition));
