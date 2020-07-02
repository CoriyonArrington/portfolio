// this opens and closes the mobile nav menu while preventing body scrolling
function openNav() {
    document.getElementById("mobileNav").style.height = "100vh";
    document.getElementById("html").style.overflow = "hidden";
    document.getElementById("home-page").style.overflow = "visible";
    document.getElementById("home-page").style.height = "100%";
}

function openNavpro() {
    document.getElementById("mobileNav").style.height = "100vh";
    document.getElementById("html").style.overflow = "hidden";
    document.getElementById("project-page").style.overflow = "visible";
    document.getElementById("project-page").style.height = "100%";
}

function openNavabt() {
    document.getElementById("mobileNav").style.height = "100vh";
    document.getElementById("html").style.overflow = "hidden";
    document.getElementById("about-page").style.overflow = "visible";
    document.getElementById("about-page").style.height = "100%";
}

function closeNav() {
    document.getElementById("html").style.overflow = "visible";
    document.getElementById("mobileNav").style.height = "0%";
}

// this opens and closes the project nav menu
function openMenu() {
    document.getElementById("projectNav").style.height = "100vh";
    document.getElementById("html").style.overflow = "hidden";
    document.getElementById("project-page").style.overflow = "visible";
    document.getElementById("project-page").style.height = "100%";
}

function closeMenu() {
    document.getElementById("html").style.overflow = "visible";
    document.getElementById("projectNav").style.height = "0%";
}

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
  const nav = document.querySelector('#mobile-avatar');

  function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
      // Scrolling UP
      nav.classList.add('is-visible');
      nav.classList.remove('is-hidden');
    } else {
      // Scrolling DOWN
      nav.classList.add('is-hidden');
      nav.classList.remove('is-visible');
    }
    scrollPos = windowY;
  }

window.addEventListener('scroll', debounce(checkPosition));

// this changes the cursor for desktop

var dot1 = document.createElement("div"); 
dot1.className="cursor-dot-outline";
var dot2 = document.createElement("div"); 
dot2.className="cursor-dot";
document.getElementsByTagName('body')[0].appendChild(dot1);
document.getElementsByTagName('body')[0].appendChild(dot2);

var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    
    setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(2.5)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(2.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();