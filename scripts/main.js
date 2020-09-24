// this hides and shows the nav
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  let scrollPos = 0;
  let scrollTimer = -1;
  const nav = document.querySelector('header.mobile-nav');
  const desknav = document.querySelector('header.desktop-nav');
  
  function bodyScroll() {
    if (scrollTimer != -1)
        clearTimeout(scrollTimer);

    scrollTimer = window.setTimeout("scrollFinished()", 1000);
    }

    function scrollFinished() {
        nav.classList.add('is-visible');
        nav.classList.remove('is-hidden');
        desknav.classList.add('is-visible');
        desknav.classList.remove('is-hidden');
    }

  function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
      // Scrolling UP
      nav.classList.add('is-visible');
      nav.classList.remove('is-hidden');
      desknav.classList.add('is-visible');
      desknav.classList.remove('is-hidden');
    } else {
      // Scrolling DOWN
      nav.classList.add('is-hidden');
      nav.classList.remove('is-visible');
      desknav.classList.add('is-hidden');
      desknav.classList.remove('is-visible');
    }
    scrollPos = windowY;
}

window.addEventListener('scroll', debounce(checkPosition));